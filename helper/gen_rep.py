#!/usr/bin/env python3

import json

def gen_rep(analysis_results):

    parsed_resu;ts = json.loads(analysis_results)
    report = ""
    for result in  parsed_results:
        report += f"Line {result['line']}: {result['message']} [{result['symbol']}]\n"
    return report
