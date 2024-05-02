#!/usr/bin/python3

"""
Solution to sorting the coins acoording to value
"""


def makeChange(coins, total):
    """
    The function to change the total
    """
    if total <= 0:
        return 0
    check = 0
    temp = 0
    coins.sort(reverse=True)
    for i in coins:
        while check < total:
            check += i
            temp += 1

        if check == total:
            return temp
        check -= i
        temp -= 1
    return -1
