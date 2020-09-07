from sympy import Integral, Symbol,sympify,S, solve,Derivative,Limit,simplify,cos,sin,log, latex,pprint
import sys, json
import sympy
import math 
from sympy import Symbol
x = Symbol('x')
y = Symbol('y')
z = Symbol('z')
#Read data from stdin

def form(a):
    if 'Integral' or 'Limit' in a :
        a = a.replace('^','**')
        a = a.replace('In','log')
        a = a.replace('∞',"S.Infinity")
        a = a.replace('π','math.pi')
        a = a.replace('e', 'math.e')
        a = a.replace('{','sympy.factorial(')
        a =a.replace('}!',')')
        a = a.replace('√','sympy.sqrt')
        a = a.replace('≥','>=')
        a = a.replace('≤','<=')
        return a

def main():
    lines = sys.stdin.readlines()
    #Since our input would only be having one line, parse our JSON data from that
    a = json.loads(lines[0])
    x = eval(a)
    x= str(x)
    x = x.replace('sqrt','√')
    x = x.replace('**','^') 
    x=x.replace('I','√(-1)')
    x =x.replace('oo','∞')
    x = x.replace('>=','⩾')
    x = x.replace('<=','⩽')
    print(x)
    #get our data as an array from read_in()
    '''if '^' in a :
        a = a.replace('^','**')
    elif ''
        a = a.replace('In','log')
        a = a.replace('∞',"S.Infinity")
        a = a.replace('π','math.pi')
        a = a.replace('e', 'math.e')
        a = a.replace('{','sympy.factorial(')
        a =a.replace('}!',')')
        a = a.replace('√','sympy.sqrt')
        a = a.replace('≥','>=')
        a = a.replace('≤','<=')
        
        x = eval(a)
        x= str(x)
        x = x.replace('sqrt','√')
        x = x.replace('**','^') 
        x=x.replace('I','√(-1)')
        x =x.replace('oo','∞')
        print(x)
    else :
        x=eval(a)
        print(x)
'''
    '''if '^' or '∞' or 'pi' in t :
        a = t.replace("^", "**")
        a = a.replace("∞","S.Infinity")
        a = a.replace('factorial','math.factorial')
        a = a.replace('log','math.log')
        a = a.replace('pi','math.pi')
        a = a.replace('π','math.pi')
        a = a.replace('e', 'math.e')
        a = a.replace('Intmath.egral','Integral')
        a = a.replace('solvmath.e','solve')
        a = a.replace('logtegral','Integral')
        a = a.replace('≥','>=')
        a = a.replace('≤','<=')
        a = a.replace('Trumath.e','True')

        x = eval(a)
        x= str(x)
        x = x.replace('sqrt','√')
        x = x.replace('**','^')
        x =x.replace('oo','∞')
        print(x)
    else :
        x = eval(t)
        print(x)
 '''

    #use numpys sum method to find sum of all elements in the array
   #return the sum to the output stream
    

#start process
if __name__ == '__main__':
    main()

