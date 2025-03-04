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

/*
Optimization journey:
- First I tried splitting the array and sorting it
- After splitting the array and sorting I would
iterate through the array and find the index where
my name was alphabetically meant to be (myName > name[index])
-This was adding more constants and so instead I put
myName inside of the string and then did the split and sort
- This method was a hair faster.
- I also was going to try spreading myName into the array, but
that would be creating a new array which would be slower. i.e:
[...people.split(' '), myName].sort()
- I tried string interpolation, but it seemed to slow
the benchmark.
- I had a lot of constants set at first, but I felt that
they were increasing the memory so I removed them all
- This reduces the legibility but seemed to get the code
to run a hair faster.
- I know running indexOf(myName) is On runtime on line 15
but if i did a binarySearch to find the index i needed I found
the run time was slower, possibly because of creating more constants
with a binary search fn. Also, we know that the amount of people is
only 5 total so maybe it is not necessary here, but could be a performance
optimization if we had larger data sets.
- Storing the TIME_PER_HEARING outside the fn saves a hair
as the function does not need to create a constant.
*/