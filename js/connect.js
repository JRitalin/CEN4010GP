const oracledb = require("oracledb");

// Using a fixed Oracle time zone helps avoid machine and deployment differences
process.env.ORA_SDTZ = 'ET';


async function run() {
    let connection;

    try {

        let sql, binds, options, result;

        // connection = await oracledb.getConnection(dbConfig);

        connection = await oracledb.getConnection({
            user: "cherrera2018",
            password: "Pass123$",
            connectString: "oraclelinux.eng.fau.edu/r11g"

        });

        

        sql = 'SELECT * FROM student'
        binds = {};
        options = {
            outFormat: oracledb.OUT_FORMAT_OBJECT // query result format
        };
        result = await connection.execute(sql,binds,options);
        console.log(result.rows);

    } catch (err) {
        console.error(err);
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error(err);
            }
        }
    }
}

run();