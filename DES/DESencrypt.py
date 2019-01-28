import table
class DES:
    M = 0x0123456789ABCDEF
    K = 0x133457799BBCDFF1

    def __init__(self):

       # print ( bin(self.M) )
        print (f" M = {format( self.M, 'b').zfill(64)}") #format to print binary number with starting zeros (note: its a format only)
        #print(bin(self.K))
        print (f" K = {format(self.K, 'b').zfill(64)}")

    def des_operation(self):
        #STEP 1 Create 16 subkeys, each of which is 48-bits long
        key = format(self.K, 'b').zfill(64)
        #print (self.K)
        print ("operation starts")
        #print(format(1 << (64 - 57), 'b').zfill(64))  # '1<<(64-n)' shifts the bit 1 to the desired bit place
        li=[]
        for i in table.PC1:
            a = format(1<<(64-i), 'b').zfill(64)
            b = int(key,2) & int(a,2) #did AND operation but data is printed in decimal by default
           # print (b)
            if b !=0:
                li.append('1')
            else:
                li.append('0')

        #print(table.PC1)
        kplus = li
        kplus = ''.join(kplus)
        print(f" K+ = {kplus}")
        x=[]  #x=c
        y=[]  #y=d
        #print(li[0])
        for i in range(0,len(table.PC1)):
            if i <28:
               x.append(li[i])
            else:
                y.append(li[i])
        x = ''.join(x)
        y = ''.join(y)
        print (type(x),type(y))
        c=[]
        d=[]
        def paddingzeros(g,h,p,i):
            k = 1
            if int(h[i - 1][0]) == 0:
                for j in range(0, len(h[i - 1])):
                    if int(h[i - 1][j + 1]) == 0:
                        k += 1
                    else:
                        break
            if k > p:
                    #print(k)
                for j in range(0, k - p):
                    g = '0' + g
            return g


        def circularshift(c,d,p,i):
            if p==1:
                n = int(c[i - 1], 2) << p
                n = format(n, 'b')
                n = paddingzeros(n,c,p,i)
                if int(c[i - 1][0]) != 0:
                    n = n[1:len(n) - 1] + n[0]
                c.append(n)

                m = int(d[i - 1], 2) << p
                m = format(m, 'b')
                m = paddingzeros(m,d,p,i)
                if int(d[i - 1][0]) != 0: #its a string so convert to integer
                    m = m[1:len(m) - 1] + m[0]
                d.append(m)
                #print(n,m)

            if p==2:
                n = int(c[i-1],2)<<p
                n = format(n,'b')
                n = paddingzeros(n,c,p,i) #if the byte has leading zeros
                if int(c[i-1][0]) ==0:
                    if int(c[i-1][1]) ==1:
                        n = n[1:len(n) - 1] + n[0]
                elif int(c[i-1][0]) ==1:
                    n = n[2:len(n) - 2] + n[0:2]
                c.append(n)

                m = int(d[i - 1], 2) << p
                m = format(m, 'b')
                m = paddingzeros(m,d,p,i)
                if int(d[i-1][0]) ==0:
                    if int(d[i-1][1]) ==1:
                        m = m[1:len(m) - 1] + m[0]
                elif int(d[i-1][0]) ==1:
                    m = m[2:len(m) - 2] + m[0:2]
                d.append(m)
        #printing Ci and Di
        for i in range (0,17):
            if i == 0:
                c.append(x)
                d.append(y)
                #print (c[i],d[i])

            if i == 1 or i==2 or i==9 or i==16:
                circularshift(c,d,1,i)
            elif 3<=i<=8 or 10<=i<=15:
                circularshift(c,d,2,i)
            #print(f'c[{i}] = {c[i]}')
            #print(f'd[{i}] = {d[i]}')

        cd=[]
        for i in range(0,17): #should always start with 0
            nm =c[i]+d[i]
            cd.append(nm)  #list should be filled from 0 index
            #if i>0:
                #print (f'cd[{i}] = {cd[i]}')
        #PC2 we use 56 bits which is converted to 48 bits later
        li2=[]
        for i in range(0,17): #generating 48 bit sub keys
            z=[]
            for j in table.PC2:
                a = format(1 << (56 - j), 'b').zfill(56) #shifts 1 to the required bit place
                b = int(cd[i], 2) & int(a, 2)  # did AND operation but data is printed in decimal by default
                # print (b)
                if b != 0:
                    z.append('1')
                else:
                    z.append('0')
            z = ''.join(z)
            li2.append(z)
            #if i>0:
                #print(f'K[{i}] = {li2[i]}')
        Ki = li2     #assigning li2 values to Ki
        #print(Ki)
        #STEP 2 ENCODE EACH 64 BIT BLOCK OF DATA

        text = format(self.M,'b').zfill(64)  # M =text
        print (f' M = {text}')
        IP=""
        for i in table.IPtable:
            a = format(1<<(64-i),'b').zfill(64)
            b = int(text,2) & int(a,2)
            if b!=0:
                IP +='1'
            else:
                IP +='0'
        print(f'IP = {IP}')
        L = []
        L.append(IP[0:32])
        R = []
        R.append(IP[32:64])
        def Stable(S,B,i):
            fl = B[i][0] + B[i][-1]
            mid = ""
            for j in range(1,len(B[i])-1):
                mid += B[i][j]

            row = int(fl,2)
            col = int(mid,2)

            Stab = table.S[i]
           # print (Stab)
            Sresult = Stab[row][col]
            Sresult = format(int(Sresult),'b').zfill(4)
           # print(Sresult)
            return Sresult

        def f(R,Ki,n):  #function from formula
            ER = ""
            for i in table.E: #generating 48bits ER value from 32bits R value
                a = format(1<<(32-i),'b').zfill(32)
                b = int(R[n-1],2) & int(a,2)
                if b!=0:
                    ER += '1'
                else:
                    ER += '0'
            print(f'ER    = {ER}')
            print(f'Ki[{n}] = {Ki[n]}')
            xor =int(Ki[n],2) ^ int(ER,2)
            xor = format(xor,'b').zfill(48) #type str
            print (f'xor   = {xor}')
            B = [] #to store 6bit data
            B.append("0") # making B0 = 0
            #print(B[0])
            for i in range(0,8):  #filling from B1 to B8
                B.append(xor[i*6:(i+1)*6])
            print (B)

            Sresult2 =""
            for i in range(1,9):
                #if i==1:
                Sresult2 +=Stable(table.S,B,i)
            print(Sresult2)
            #Ptable permutation
            fresult =""
            print (table.P)

            for i in table.P:
                a = format(1<<(32 - i),'b').zfill(32)
                #print (a)
                b = int(Sresult2, 2) & int(a, 2)  # did AND operation but data is printed in decimal by default
                # print (b)
                if b != 0:
                    fresult +='1'
                else:
                    fresult +='0'
            print(f' f= {fresult}')
            return fresult

        print (f'L0= {L[0]}',f'R0= {R[0]}')
        #L1 = R0 // R1 = L0 + f(R0, K1)

        for i in range(1,17): #L1-L16 and R1-R16
            L.append(R[i-1])
            fresult = f(R,Ki,i)
            fun = int(L[i-1],2) ^ int(fresult,2)
            fun = format(fun,'b').zfill(32)
            R.append(fun)

        print (L[16],R[16])
        RL = R[16]+L[16]
        cipher =""
        for i in table.IPinv:
            a = format(1<<(64-i), 'b').zfill(64)
            b = int(RL,2) & int(a,2) #did AND operation but data is printed in decimal by default
           # print (b)
            if b !=0:
                cipher+='1'
            else:
                cipher+='0'
        print (cipher)
        print (f' Ciphertext = {hex(int(cipher,2))}')

obj1 = DES()
obj1.des_operation()
