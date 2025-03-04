const TIME_PER_HEARING = 30;

const hearingEndTime = (
    myName,
    numJudges,
    otherPeople
) => {
    return Math.ceil(
        ((
            // Append myName to people (string interpolation was slower)
            otherPeople + ' ' + myName
        // sort and find index of name, and 1 for total people
        ).split(' ')
        .sort()
        .indexOf(myName) + 1)
        // Divide inclusive total by number of judges
        / numJudges
    // Math.ceil for total hearing blocks * time per hearing
    ) * TIME_PER_HEARING
}

const start = performance.now();
const time = hearingEndTime("Zane", 1, "Mark Hank Ana Vivian");
const end = performance.now();

/**
 * --- With above inputs --
 * Time for hearing: 150
 * Time to run: 0.07072700000000154
 */
console.log("Time for hearing:", time);
console.log("Time to run:", end - start);