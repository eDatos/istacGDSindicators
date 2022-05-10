/* istanbul ignore file */

const strPad = function (input, padLength, padString = ' ') {
  while (input.length < padLength) {
    input = padString + input;
  }
  return input;
};

function RecodeDatesHelper() {
  const START = "^";
  const END = "$";
  const GROUP_LEFT = "(";
  const GROUP_RIGHT = ")";

  // GPE
  const GPE_BIYEARLY_CHARACTER = "H";
  const GPE_QUARTERLY_CHARACTER = "Q";
  const GPE_MONTHLY_CHARACTER = "M";
  const GPE_WEEKLY_CHARACTER = "W";

  const GPE_YEAR_PATTERN = "[1-2]\\d{3}";
  const GPE_YEARLY_PATTERN = GROUP_LEFT + GPE_YEAR_PATTERN + GROUP_RIGHT;
  const GPE_BIYEARLY_PATTERN = GROUP_LEFT + GPE_YEAR_PATTERN + GROUP_RIGHT + "\\-?" + GPE_BIYEARLY_CHARACTER + GROUP_LEFT + "[1-2]" + GROUP_RIGHT;
  const GPE_QUARTERLY_PATTERN = GROUP_LEFT + GPE_YEAR_PATTERN + GROUP_RIGHT + "\\-?" + GPE_QUARTERLY_CHARACTER + GROUP_LEFT + "[1-4]" + GROUP_RIGHT;
  const GPE_MONTH_PATTERN = "0[1-9]|1[0-2]";
  const GPE_MONTHLY_PATTERN = GROUP_LEFT + GPE_YEAR_PATTERN + GROUP_RIGHT + "\\-?" + GPE_MONTHLY_CHARACTER + GROUP_LEFT + GPE_MONTH_PATTERN + GROUP_RIGHT;
  const GPE_MONTHLY_PATTERN_WITHOUT_CHARACTER = GROUP_LEFT + GPE_YEAR_PATTERN + GROUP_RIGHT + "\\-?" + GROUP_LEFT + GPE_MONTH_PATTERN + GROUP_RIGHT;
  const GPE_WEEKLY_PATTERN = GROUP_LEFT + GPE_YEAR_PATTERN + GROUP_RIGHT + "\\-?" + GPE_WEEKLY_CHARACTER + GROUP_LEFT + "0[1-9]|[1-4][0-9]|5[0-3]" + GROUP_RIGHT
  const GPE_DAILY_PATTERN = GROUP_LEFT + GPE_YEAR_PATTERN + GROUP_RIGHT + "\\-?" + GROUP_LEFT + GPE_MONTH_PATTERN + GROUP_RIGHT + GROUP_LEFT
                                              + "0[1-9]|[1-2][0-9]|3[0-1]" + GROUP_RIGHT;

  const GPE_REPORTING_TIME_PERIOD_TYPE =
    GROUP_LEFT + GPE_YEARLY_PATTERN + GROUP_RIGHT + "|" +
    GROUP_LEFT + GPE_BIYEARLY_PATTERN + GROUP_RIGHT + "|" +
    GROUP_LEFT + GPE_QUARTERLY_PATTERN + GROUP_RIGHT + "|" +
    GROUP_LEFT + GPE_MONTH_PATTERN + GROUP_RIGHT + "|" +
    GROUP_LEFT + GPE_MONTHLY_PATTERN + GROUP_RIGHT + "|" +
    GROUP_LEFT + GPE_WEEKLY_PATTERN + GROUP_RIGHT + "|" +
    GROUP_LEFT + GPE_DAILY_PATTERN + GROUP_RIGHT;

  const GPE_REPORTING_TIME_PERIOD = START + GPE_REPORTING_TIME_PERIOD_TYPE + END;
  const GPE_REPORTING_YEARLY_TYPE = START + GPE_YEARLY_PATTERN + END;
  const GPE_REPORTING_BIYEARLY_TYPE = START + GPE_BIYEARLY_PATTERN + END;
  const GPE_REPORTING_QUARTERLY_TYPE = START + GPE_QUARTERLY_PATTERN + END;
  const GPE_REPORTING_MONTH_TYPE = START + GPE_MONTH_PATTERN + END;
  const GPE_REPORTING_MONTHLY_TYPE = START + GPE_MONTHLY_PATTERN + END;
  const GPE_REPORTING_WEEKLY_TYPE = START + GPE_WEEKLY_PATTERN + END;
  const GPE_REPORTING_DAILY_TYPE = START + GPE_DAILY_PATTERN + END;

  // SDMX
  const REPORTING_YEAR_PERIOD_INDICATOR = "A";
  const REPORTING_SEMESTER_PERIOD_INDICATOR = "S";
  const REPORTING_TRIMESTER_PERIOD_INDICATOR = "T";
  const REPORTING_QUARTER_PERIOD_INDICATOR = "Q";
  const REPORTING_MONTH_PERIOD_INDICATOR = "M";
  const REPORTING_WEEK_PERIOD_INDICATOR = "W";
  const REPORTING_DAY_PERIOD_INDICATOR = "D";

  const REPORTING_YEAR = "(\\d{4})";
  const REPORTING_YEAR_TYPE = REPORTING_YEAR + "-(" + REPORTING_YEAR_PERIOD_INDICATOR + ")(1).*";
  const REPORTING_SEMESTER_TYPE = REPORTING_YEAR + "-(" + REPORTING_SEMESTER_PERIOD_INDICATOR + ")([1-2]).*";
  const REPORTING_TRIMESTER_TYPE = REPORTING_YEAR + "-(" + REPORTING_TRIMESTER_PERIOD_INDICATOR + ")([1-3]).*";
  const REPORTING_QUARTER_TYPE = REPORTING_YEAR + "-(" + REPORTING_QUARTER_PERIOD_INDICATOR + ")([1-4]).*";
  const REPORTING_MONTH_TYPE = REPORTING_YEAR + "-(" + REPORTING_MONTH_PERIOD_INDICATOR + ")(0[1-9]|1[0-2]).*";
  const REPORTING_WEEK_TYPE = REPORTING_YEAR + "-(" + REPORTING_WEEK_PERIOD_INDICATOR + ")(0[1-9]|[1-4][0-9]|5[0-3]).*";
  const REPORTING_DAY_TYPE = REPORTING_YEAR + "-(" + REPORTING_DAY_PERIOD_INDICATOR + ")(0[0-9][1-9]|[1-2][0-9][0-9]|3[0-5][0-9]|36[0-6]).*";

  const REPORTING_TIME_PERIOD_TYPE = GROUP_LEFT + REPORTING_YEAR_TYPE + GROUP_RIGHT + "|" + GROUP_LEFT + REPORTING_SEMESTER_TYPE + GROUP_RIGHT + "|" +
    GROUP_LEFT + REPORTING_TRIMESTER_TYPE + GROUP_RIGHT + "|" + GROUP_LEFT + REPORTING_QUARTER_TYPE + GROUP_RIGHT + "|" +
    GROUP_LEFT + REPORTING_MONTH_TYPE + GROUP_RIGHT + "|" + GROUP_LEFT + REPORTING_WEEK_TYPE + GROUP_RIGHT + "|" +
    GROUP_LEFT + REPORTING_DAY_TYPE + GROUP_RIGHT;
  const PATTERN_REPORTING_TIME_PERIOD = START + REPORTING_TIME_PERIOD_TYPE + END;
  const PATTERN_REPORTING_YEAR_TYPE = START + REPORTING_YEAR_TYPE + END;
  const PATTERN_REPORTING_SEMESTER_TYPE = START + REPORTING_SEMESTER_TYPE + END;
  const PATTERN_REPORTING_TRIMESTER_TYPE = START + REPORTING_TRIMESTER_TYPE + END;
  const PATTERN_REPORTING_QUARTER_TYPE = START + REPORTING_QUARTER_TYPE + END;
  const PATTERN_REPORTING_MONTH_TYPE = START + REPORTING_MONTH_TYPE + END;
  const PATTERN_REPORTING_WEEK_TYPE = START + REPORTING_WEEK_TYPE + END;
  const PATTERN_REPORTING_DAY_TYPE = START + REPORTING_DAY_TYPE + END;

  const DATE_TIME = "(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[0-1]|0[1-9]|[1-2][0-9])"
    + "T(2[0-3]|[0-1][0-9]):([0-5][0-9]):([0-5][0-9])(\\.[0-9]+)?(Z|[+-](?:2[0-3]|[0-1][0-9]):[0-5][0-9])?";
  const PATTERN_DATE_TIME = START + DATE_TIME + END;

  const G_YEAR = "(-?\\d{4})(Z|[+|-]([0-1]\\d|2[0-4])\\:([0-5]\\d))?";
  const G_YEAR_MONTH = "(-?\\d{4})-(1[0-2]{1}|0\\d{1})(Z|([+|-]([0-1]\\d|2[0-4])\\:([0-5]\\d)))?";
  const DATE = "(-?\\d{4})-(1[0-2]|0[1-9])-(3[0-1]|0[1-9]|[1-2][0-9])(Z|[+-](?:2[0-3]|[0-1][0-9]):[0-5][0-9])?";
  const GREGORIAN_TIME_PERIOD_TYPE = GROUP_LEFT + G_YEAR + GROUP_RIGHT + "|" + GROUP_LEFT + G_YEAR_MONTH + GROUP_RIGHT + "|" + GROUP_LEFT + DATE + GROUP_RIGHT;
  const PATTERN_GREGORIAN_TIME_PERIOD_TYPE = START + GREGORIAN_TIME_PERIOD_TYPE + END;

  const TIME_RANGE_TYPE_1 = ".+/P.*T(\\d+H)?(\\d+M)?(\\d+(.\\d+)?S)?";
  const TIME_RANGE_TYPE_2 = ".+/P[^T]+";
  const TIME_RANGE_TYPE = GROUP_LEFT + TIME_RANGE_TYPE_1 + GROUP_RIGHT + "|" + GROUP_LEFT + TIME_RANGE_TYPE_2 + GROUP_RIGHT;

  const PATTERN_TIME_RANGE = START + TIME_RANGE_TYPE + END;

  const _isTimeRange = function (time) {
    return time.match(new RegExp(PATTERN_TIME_RANGE));
  }

  const _isReportingTimePeriod = function (time) {
    return time.match(new RegExp(PATTERN_REPORTING_TIME_PERIOD));
  }

  const _isGpeReportingTimePeriod = function (time) {
    return time.match(new RegExp(GPE_REPORTING_TIME_PERIOD_TYPE));
  }

  const _isDateTime = function (time) {
    return time.match(new RegExp(PATTERN_DATE_TIME));
  }

  const _isGregorianTimePeriod = function (time) {
    return time.match(new RegExp(PATTERN_GREGORIAN_TIME_PERIOD_TYPE));
  }

  // TIME RANGE
  // 2013-07-24/P1M
  // 2013-07-24T13:21:52.519+01:00/P1M
  const calculateTimeRangePeriod = function (time) {
    const split = time.split("/");
    let date = split[0];
    if (date.indexOf("T") != -1) {
      date = date.split("T")[0];
    }
    date = date.split("-");
    return strPad(date[0], 4, "0") + strPad(date[1], 2, "0") + strPad(date[2], 2, "0");
  }

  // REPORTING TIME PERIOD
  // 2000-A1
  // 2000-S1
  // 2000-T3
  // 2000-Q4
  // 2000-M12
  // 2000-W52
  // 2000-D353
  const _calculateReportingPeriod = function (time) {
    if (time.match(new RegExp(PATTERN_REPORTING_YEAR_TYPE))) {
      return time.match(new RegExp(PATTERN_REPORTING_YEAR_TYPE))[1] + "0101";
      //return time.match(new RegExp(PATTERN_REPORTING_YEAR_TYPE))[1];
    }
    if (time.match(new RegExp(PATTERN_REPORTING_SEMESTER_TYPE))) {
      const year = time.match(new RegExp(PATTERN_REPORTING_SEMESTER_TYPE))[1];
      const month = (time.match(new RegExp(PATTERN_REPORTING_SEMESTER_TYPE))[3] - 1) * 6;
      return year + strPad("" + (month + 1), 2, "0") + "01";
    }
    if (time.match(new RegExp(PATTERN_REPORTING_TRIMESTER_TYPE))) {
      const year = time.match(new RegExp(PATTERN_REPORTING_TRIMESTER_TYPE))[1];
      const month = (time.match(new RegExp(PATTERN_REPORTING_TRIMESTER_TYPE))[3] - 1) * 4;
      return year + strPad("" + (month + 1), 2, "0") + "01";
    }
    if (time.match(new RegExp(PATTERN_REPORTING_QUARTER_TYPE))) {
      const year = time.match(new RegExp(PATTERN_REPORTING_QUARTER_TYPE))[1];
      const month = (time.match(new RegExp(PATTERN_REPORTING_QUARTER_TYPE))[3] - 1) * 3;
      return year + strPad("" + (month + 1), 2, "0") + "01";
      // const quarter = time.match(new RegExp(PATTERN_REPORTING_QUARTER_TYPE))[3];
      // return year + quarter;
    }
    if (time.match(new RegExp(PATTERN_REPORTING_MONTH_TYPE))) {
      const year = time.match(new RegExp(PATTERN_REPORTING_MONTH_TYPE))[1];
      const month = parseInt(time.match(new RegExp(PATTERN_REPORTING_MONTH_TYPE))[3]);
      return year + strPad("" + month, 2, "0") + "01";
      //return year + month + "01";
    }
    if (time.match(new RegExp(PATTERN_REPORTING_WEEK_TYPE))) {
      const year = time.match(new RegExp(PATTERN_REPORTING_WEEK_TYPE))[1];
      const day = (time.match(new RegExp(PATTERN_REPORTING_WEEK_TYPE))[3] - 1) * 7;
      const date = new Date(year, "", day + 1);
      return year + strPad("" + (date.getMonth() + 1), 2, "0") + strPad("" + date.getDate(), 2, "0");
      // const week = parseInt(time.match(new RegExp(PATTERN_REPORTING_WEEK_TYPE))[3]);
      // return year + strPad("" + week, 2, "0");
    }
    if (time.match(new RegExp(PATTERN_REPORTING_DAY_TYPE))) {
      const year = time.match(new RegExp(PATTERN_REPORTING_DAY_TYPE))[1];
      const day = time.match(new RegExp(PATTERN_REPORTING_DAY_TYPE))[3];
      const date = new Date(year, "", day);
      return year + strPad("" + (date.getMonth() + 1), 2, "0") + strPad("" + date.getDate(), 2, "0");
    }
    return time;
  }

  const _calculateReportingPeriodGranularity = function (time) {
    if (time.match(new RegExp(PATTERN_REPORTING_YEAR_TYPE))) {
      return "YEARLY";
    }
    if (time.match(new RegExp(PATTERN_REPORTING_SEMESTER_TYPE))) {
      return "BIYEARLY";
    }
    if (time.match(new RegExp(PATTERN_REPORTING_TRIMESTER_TYPE))) {
      return "FOUR_MONTHLY";
    }
    if (time.match(new RegExp(PATTERN_REPORTING_QUARTER_TYPE))) {
      return "QUARTERLY";
    }
    if (time.match(new RegExp(PATTERN_REPORTING_MONTH_TYPE))) {
      return "MONTHLY";
    }
    if (time.match(new RegExp(PATTERN_REPORTING_WEEK_TYPE))) {
      return "WEEKLY";
    }
    if (time.match(new RegExp(PATTERN_REPORTING_DAY_TYPE))) {
      return "DAILY";
    }
    return "";
  }

  const _calculateGpeReportingPeriod = function (time) {
    if (time.match(new RegExp(START + GPE_YEARLY_PATTERN + END))) {
      //return date + "0101";
      return time + "0101";
    }
    if (time.match(new RegExp(START + GPE_BIYEARLY_PATTERN + END))) {
      const year = time.match(new RegExp(START + GPE_BIYEARLY_PATTERN + END))[1];
      const month = (time.match(new RegExp(START + GPE_BIYEARLY_PATTERN + END))[2] - 1) * 6;
      //return year + strPad("" + (month + 1), 2, "0") + "01";
      return year + strPad("" + (month + 1), 2, "0") + "01";
    }
    if (time.match(new RegExp(START + GPE_QUARTERLY_PATTERN + END))) {
      const year = time.match(new RegExp(START + GPE_QUARTERLY_PATTERN + END))[1];
      const month = (time.match(new RegExp(START + GPE_QUARTERLY_PATTERN + END))[2] - 1) * 3;
      return year + strPad("" + (month + 1), 2, "0") + "01";
      // const quarter = time.match(new RegExp(START + GPE_QUARTERLY_PATTERN + END))[2];
      // return year + quarter;
    }
    if (time.match(new RegExp(START + GPE_MONTHLY_PATTERN + END))) {
      const year = time.match(new RegExp(START + GPE_MONTHLY_PATTERN + END))[1];
      const month = parseInt(time.match(new RegExp(START + GPE_MONTHLY_PATTERN + END))[2]);
      return year + strPad("" + (month), 2, "0") + "01";
      //return year + strPad("" + month, 2, "0");
    }
    if (time.match(new RegExp(START + GPE_MONTHLY_PATTERN_WITHOUT_CHARACTER + END))) {
      const year = time.match(new RegExp(START + GPE_MONTHLY_PATTERN_WITHOUT_CHARACTER + END))[1];
      const month = parseInt(time.match(new RegExp(START + GPE_MONTHLY_PATTERN_WITHOUT_CHARACTER + END))[2]);
      return year + strPad("" + (month), 2, "0") + "01";
      //return year + strPad("" + month, 2, "0");
    }
    if (time.match(new RegExp(START + GPE_WEEKLY_PATTERN + END))) {
      const year = time.match(new RegExp(START + GPE_WEEKLY_PATTERN + END))[1];
      const day =
        (time.match(new RegExp(START + GPE_WEEKLY_PATTERN + END))[2] - 1) * 7;
      const date = new Date(year, "", day + 1);
      return year + strPad("" + (date.getMonth()), 2, "0") + strPad("" + date.getDate(), 2, "0");
      // const year = time.match(new RegExp(START + GPE_WEEKLY_PATTERN + END))[1];
      // const week = parseInt(time.match(new RegExp(START + GPE_WEEKLY_PATTERN + END))[2]);
      // return year + strPad("" + week, 2, "0");
    }
    if (time.match(new RegExp(START + GPE_DAILY_PATTERN + END))) {
      const year = time.match(new RegExp(START + GPE_DAILY_PATTERN + END))[1];
      const month = time.match(new RegExp(START + GPE_DAILY_PATTERN + END))[2];
      const day = time.match(new RegExp(START + GPE_DAILY_PATTERN + END))[3];
      return year + strPad("" + (month), 2, "0") + strPad("" + (day), 2, "0");
    }
    return time;
  }

  const _calculateGpeReportingPeriodGranularity = function (time) {
    if (time.match(new RegExp(GPE_REPORTING_YEARLY_TYPE))) {
      return "YEARLY";
    }
    if (time.match(new RegExp(GPE_REPORTING_BIYEARLY_TYPE))) {
      return "BIYEARLY";
    }
    if (time.match(new RegExp(GPE_REPORTING_QUARTERLY_TYPE))) {
      return "QUARTERLY";
    }
    if (time.match(new RegExp(GPE_REPORTING_MONTH_TYPE))) {
      return "MONTHLY";
    }
    if (time.match(new RegExp(GPE_REPORTING_MONTHLY_TYPE))) {
      return "MONTHLY";
    }
    if (time.match(new RegExp(GPE_REPORTING_WEEKLY_TYPE))) {
      return "WEEKLY";
    }
    if (time.match(new RegExp(GPE_REPORTING_DAILY_TYPE))) {
      return "DAILY";
    }
    return "";
  }

  // DATETIME
  // 2013-07-24T13:21:52.519+01:00
  // 2013-07-24
  const _calculateDateTime = function (time) {
    if (time.indexOf("T") != -1) {
      time = time.split("T")[0];
    }
    const date = time.split("-");
    return strPad(date[0], 4, "0") + strPad(date[1], 2, "0") + strPad(date[2], 2, "0");
  }

  // GREGORIAN TIME
  // 2000
  // 200001
  // 200001-31
  const _calculateGregorianTimePeriod = function (time) {
    time = time.split("-");
    switch (time.length) {
      case 1:
        return strPad(time[0], 4, "0") + "0101";
      case 2:
        return strPad(time[0], 4, "0") + strPad(time[1], 2, "0") + "01";
      case 3:
        return strPad(time[0], 4, "0") + strPad(time[1], 2, "0") + strPad(time[2], 2, "0");
    }
  }

  const _calculateDate = function (time) {
    let date = null;
    if (_isTimeRange(time)) {
      date = _calculateTimeRangePeriod(time);
    } else if (_isReportingTimePeriod(time)) {
      date = _calculateReportingPeriod(time);
    } else if (_isDateTime(time)) {
      date = _calculateDateTime(time);
    } else if (_isGpeReportingTimePeriod(time)) {
      date = _calculateGpeReportingPeriod(time);
    } else if (_isGregorianTimePeriod(time)) {
      date = _calculateGregorianTimePeriod(time);
    }

    return date === null ? time : date;
  }

  const _calculateDateGranularity = function (time) {
    if (_isTimeRange(time)) {
      return "";
    } else if (_isReportingTimePeriod(time)) {
      return _calculateReportingPeriodGranularity(time);
    } else if (_isDateTime(time)) {
      return "";
    } else if (_isGpeReportingTimePeriod(time)) {
      return _calculateGpeReportingPeriodGranularity(time);
    } else if (_isGregorianTimePeriod(time)) {
      return "";
    }
    return "";
  }

  const _recodeDates = function (date, granularity) {
    switch (granularity) {
      // anual
      case "YEARLY": {
        if (date.match(new RegExp(START + GPE_YEARLY_PATTERN + END))) {
          //return date + "0101";
          return date + "0101";
        }
        break;
      }
      // semestral
      case "BIYEARLY": {
        // TODO: no existe este rango de fecha en GDS, devolver dato mensual en enero y junio
        if (date.match(new RegExp(START + GPE_BIYEARLY_PATTERN + END))) {
          const year = date.match(new RegExp(START + GPE_BIYEARLY_PATTERN + END))[1];
          const month = (date.match(new RegExp(START + GPE_BIYEARLY_PATTERN + END))[2] - 1) * 6;
          return year + strPad("" + (month + 1), 2, "0") + "01";
          //return year + strPad("" + (month + 1), 2, "0");
        }
        break;
      }
      // trimestral
      case "QUARTERLY": {
        if (date.match(new RegExp(START + GPE_QUARTERLY_PATTERN + END))) {
          const year = date.match(new RegExp(START + GPE_QUARTERLY_PATTERN + END))[1];
          const month = (date.match(new RegExp(START + GPE_QUARTERLY_PATTERN + END))[2] - 1) * 3;
          return year + strPad("" + (month + 1), 2, "0") + "01";
          // const quarter = date.match(new RegExp(START + GPE_QUARTERLY_PATTERN + END))[2];
          // return year + quarter;
        }
        break;
      }
      // cuatrimestral
      case "FOUR_MONTHLY": {
        // TODO: no existe este rango de fecha en GDS, devolver dato mensual en enero, marzo, junio y septiembre
        if (date.match(new RegExp(START + GPE_BIYEARLY_PATTERN + END))) {
          const year = date.match(new RegExp(START + GPE_BIYEARLY_PATTERN + END))[1];
          const month = (date.match(new RegExp(START + GPE_BIYEARLY_PATTERN + END))[2] - 1) * 3;
          return year + strPad("" + (month + 1), 2, "0") + "01";
          //return year + strPad("" + (month + 1), 2, "0");
        }
        break;
      }
      // mensual
      case "MONTHLY": {
        if (date.match(new RegExp(START + GPE_MONTHLY_PATTERN + END))) {
          const year = date.match(new RegExp(START + GPE_MONTHLY_PATTERN + END))[1];
          const month = parseInt(date.match(new RegExp(START + GPE_MONTHLY_PATTERN + END))[2]);
          return year + strPad("" + (month), 2, "0") + "01";
          //return year + strPad("" + month, 2, "0");
        } else if(date.match(new RegExp(START + GPE_MONTHLY_PATTERN_WITHOUT_CHARACTER + END))) {
          const year = date.match(new RegExp(START + GPE_MONTHLY_PATTERN_WITHOUT_CHARACTER + END))[1];
          const month = parseInt(date.match(new RegExp(START + GPE_MONTHLY_PATTERN_WITHOUT_CHARACTER + END))[2]);
          return year + strPad("" + (month), 2, "0") + "01";
          //return year + strPad("" + month, 2, "0");
        }

        break;
      }
      // semanal
      case "WEEKLY": {
        if (date.match(new RegExp(START + GPE_WEEKLY_PATTERN + END))) {
          const year = date.match(new RegExp(START + GPE_WEEKLY_PATTERN + END))[1];
          const day =
            (date.match(new RegExp(START + GPE_WEEKLY_PATTERN + END))[2] - 1) * 7;
          date = new Date(year, "", day + 1);
          return year + strPad("" + (date.getMonth()), 2, "0") + strPad(""+date.getDate(), 2, "0");
          // const year = date.match(new RegExp(START + GPE_WEEKLY_PATTERN + END))[1];
          // const week = parseInt(date.match(new RegExp(START + GPE_WEEKLY_PATTERN + END))[2]);
          // return year + strPad("" + week, 2, "0");
        }
        break;
      }
      // diario
      case "DAILY": {
        if (date.match(new RegExp(START + GPE_DAILY_PATTERN + END))) {
          const year = date.match(new RegExp(START + GPE_DAILY_PATTERN + END))[1];
          const month = date.match(new RegExp(START + GPE_DAILY_PATTERN + END))[2];
          const day = date.match(new RegExp(START + GPE_DAILY_PATTERN + END))[3];
          return year + strPad("" + (month), 2, "0") + strPad("" + (day), 2, "0");
        }
        break;
      }
    }

    return _calculateDate(date);
  }

  /**
   * Function that process convert the date given by the ISTAC API to the GDS connector required format
   * @param {string} data The date to be proccesed.
   * @param {string} granularity The declared granularity of the code.
   * @return {string} The formated date.
   */
  this.converDate = function (date, granularity) {
    return _recodeDates(date, granularity);
  }

  this.calculateDateGranularity = function(date) {
    return _calculateDateGranularity(date);
  }
}

/* global exports */
/* istanbul ignore next */
if (typeof exports !== "undefined") {
  exports["__esModule"] = true;
  exports["default"] = RecodeDatesHelper;
}
