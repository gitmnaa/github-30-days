from main import calculate_score


def test_calculate_score():
    assert calculate_score(10) == 20
    assert calculate_score(25) == 50
