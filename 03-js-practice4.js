/* Recursion */

function findSolution(target) {

    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ||
                find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}

console.log(findSolution(13));
// 24 → (((1 * 3) + 5) * 3)

// -------------------------------------------------

function countDownFrom(number) {
	if (number === 0) {
		return;
	}

    console.log(number);    
    countDownFrom(number - 1);
}

countDownFrom(5);