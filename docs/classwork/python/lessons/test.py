import pprint
pprint.pprint([{str(x):x%3==0} for x in range(1, 11)])