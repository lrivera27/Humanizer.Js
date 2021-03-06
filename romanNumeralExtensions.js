var Humanizer;
(function (Humanizer) {
    "use strict";
    var romanNumberals = {
        "M": 1000,
        "CM": 900,
        "D": 500,
        "CD": 400,
        "C": 100,
        "XC": 90,
        "L": 50,
        "XL": 40,
        "X": 10,
        "IX": 9,
        "V": 5,
        "IV": 4,
        "I": 1
    };
    var validRomanNumerals = /^(?:(?=[MDCLXVI])((M{0,3})((C[DM])|(D?C{0,3}))?((X[LC])|(L?XX{0,2})|L)?((I[VX])|(V?(II{0,2}))|V)?))$/;
    /**
     * Converts Roman numbers into integer
     * @returns {Number} Human-readable number
     */
    String.prototype.fromRoman = function () {
        /// <summary>
        ///     Converts Roman numbers into integer
        /// </summary>
        /// <returns type="Number" integer="true">
        ///     Human-readable number
        /// </returns>
        var input = this.toUpperCase().trim();
        var length = input.length;
        if ((length === 0) || !validRomanNumerals.test(input)) {
            throw new Error("Empty or invalid Roman numeral string.");
        }
        var total = 0;
        var i = length;
        while (i > 0) {
            var digit = romanNumberals[input.charAt(--i)];
            if (i > 0) {
                var previousDigit = romanNumberals[input.charAt(i - 1)];
                if (previousDigit < digit) {
                    digit -= previousDigit;
                    i--;
                }
            }
            total += digit;
        }
        return total;
    };
    /**
     * Converts the input to Roman number
     * @returns {String} Roman number
     */
    Number.prototype.toRoman = function () {
        /// <summary>
        ///     Converts the input to Roman number
        /// </summary>
        /// <returns type="String">
        ///     Roman number
        /// </returns>
        var minValue = 1;
        var maxValue = 3999;
        if ((this < minValue) || (this > maxValue)) {
            throw new Error("Out of range");
        }
        var sb = [];
        var input = this;
        for (var key in romanNumberals) {
            if (Object.prototype.hasOwnProperty.call(romanNumberals, romanNumberals)) {
                var value = romanNumberals[key];
                while (input / value > 0) {
                    sb.push(key);
                    input -= value;
                }
            }
        }
        return sb.join("");
    };
})(Humanizer || (Humanizer = {}));
//# sourceMappingURL=romanNumeralExtensions.js.map