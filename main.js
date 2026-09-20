import isPassing, {computeAverage} from "./gradeUtils.js";

const enrollees = [
    { name: "Ana Cruz", prelim: 85, midterm: 90, final: 88 },
    { name: "Bea Santos", prelim: 70, midterm: 65, final: 60 },
    { name: "Cid Ramos", prelim: 95, midterm: 92, final: 97 },
    { name: "Dex Alonzo", prelim: 60, midterm: 55, final: 50 },
    { name: "Eli Tan", prelim: 78, midterm: 80, final: 76 }
];

const getEnrollees = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //return reject(new Error("Database connection Failed"));
            resolve(enrollees);
        }, 1000);
    });
}

const generateReport = async () => {
    try {
        const rawStudents = await getEnrollees();
        const processedEnrollees = rawStudents.map(({name, prelim, midterm, final}) => {
            const average = computeAverage(prelim,midterm,final);
            return{
                name,
                average,
                status: isPassing(average) ? "PASSING" : "PROBATION",
            };
        });

        const passingStudents = processedEnrollees.filter((student) => student.status === "PASSING");
        const totalAverage = processedEnrollees.reduce((sum, {average}) => sum + average, 0);
        const classAverage =totalAverage/processedEnrollees.length;

        console.log("=== IT313 Enrollment Eligibility Report ===")
        processedEnrollees.forEach(({name, average, status}) => {
            console.log(`${name.padEnd(12)} Average : ${average.toFixed(2)} ${status}`);
        });
        console.log(`Class Average: ${classAverage.toFixed(2)}`);
        console.log(`Passing: ${passingStudents.length}/ ${processedEnrollees.length}`)

    } catch (error) {
        console.error("Failed to generate report: ", error.message);
    }
};

generateReport();