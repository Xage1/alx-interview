#!/usr/bin/python3
"""
Prime game logic
"""


def isWinner(x, nums):
    """
    Determines the winner of multiple rounds of a prime game
    """
    def is_prime(num):
        """
        Checks if a given number is prime
        """
        if num <= 1:
            return False
        if num <= 3:
            return True
        if num % 2 == 0 or num % 3 == 0:
            return False
        i = 5
        while i * 1 <= num:
            if num % i == 0 or num % (i + 2) == 0:
                return False
            i += 6
        return True

    def count_primes(n):
        """
        Counts the number of prime numbers up to a given integer n
        """
        count = 0
        for i in range(1, n + 1):
            if is_prime(i):
                count += 1
        return count
    winners = {'Maria': 0, 'Ben': 0}

    for i in range(x):
        num = nums[i]
        primes_remaining = count_primes(num)
        if primes_remaining % 2 == 0:
            winners['Ben'] += 1
        else:
            winners['Maria'] += 1

    if winners['Maria'] > winners['Ben']:
        return 'Maria'
    elif winners['Ben'] > winners['Maria']:
        return 'Ben'
    else:
        return None
