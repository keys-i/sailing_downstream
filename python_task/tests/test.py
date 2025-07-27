"""Testing the `filter_list` function."""
import pytest
from src.main import filter_list


def test_filter_list_valid():
    """
    Test filtering a valid list.

    This test checks whether the `filter_list` function correctly filters a list
    of integers according to a specified condition (e.g., returning only prime
    numbers). The test compares the function's output to the expected result.
    """
    input_list = list(range(1, 21))
    result = filter_list(input_list)
    expected_result = [1, 5, 7, 11, 13, 17, 19]
    assert result == expected_result


def test_filter_list_invalid_length():
    """
    Test filtering a list of invalid length.

    This test verifies that the `filter_list` function raises a `ValueError`
    when the input list does not meet the required length condition (e.g.,
    the list must contain exactly 20 elements).
    """
    input_list = list(range(1, 20))
    with pytest.raises(ValueError):
        filter_list(input_list)


def test_filter_list_exact_multiple_of_10():
    """
    Test filtering a list with length exactly a multiple of 10.

    This test checks the function with a list length of exactly 10,
    which should be valid and correctly filtered.
    """
    input_list = list(range(1, 11))
    result = filter_list(input_list)
    expected_result = [1, 5, 7]
    assert result == expected_result


def test_filter_list_multiples_of_10_larger():
    """
    Test filtering a larger list with length a multiple of 10.

    This test checks the function with a list length of 30, which
    is a valid multiple of 10, to verify correct filtering.
    """
    input_list = list(range(1, 31))
    result = filter_list(input_list)
    expected_result = [1, 5, 7, 11, 13, 17, 19, 23, 25, 29]
    assert result == expected_result


def test_filter_list_empty():
    """
    Test filtering an empty list.

    This test verifies that the function handles an empty list without
    raising an exception, which should be considered a valid case since
    0 is a multiple of 10.
    """
    input_list = []
    result = filter_list(input_list)
    expected_result = []
    assert result == expected_result


def test_filter_list_large_numbers():
    """
    Test filtering a list with large numbers.

    This test checks the function with a list containing large integers
    to ensure it handles larger values correctly.
    """
    input_list = list(range(1000000001, 1000000011))
    result = filter_list(input_list)
    expected_result = [1000000001, 1000000005, 1000000007]
    assert result == expected_result
