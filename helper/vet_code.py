import pylint.lint

def analyze_code(code):
    (pylint_output, _) = pylint.lint.Run(['--output-format=json', '--rcfile=pylintrc', code])
    return pylint_output
