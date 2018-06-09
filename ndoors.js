(
    () => {
        const numberOfDoors = process.argv.slice(2)[0];

        if( !numberOfDoors ) throw Error('Argument missing: How many number of doors?');
        if( isNaN( numberOfDoors ) ) throw Error('Wrong datatype: Argument must be a number');

        let doors = Array( parseInt( numberOfDoors ) ).fill( false ); //initially closed
        let leap = 1;

        run = () => {

            while( leap <= numberOfDoors ){
                cycle();
                updateLeap();
            }

            console.log( 
                'open doors: ', 
                doors.map( 
                    (door, index) => {
                        if( door ) return index;
                    }
                )
                .filter( doorNumber => doorNumber )
            );

            console.log( `closed doors: every door between 0 and ${numberOfDoors} which is not in the open door list` );
        }

        cycle = () => {

            let index = 0;
            while( index <= numberOfDoors ){
                toggle( index );
                index += leap;
            }

        }

        toggle = (index) => {
            doors[ index ] = !doors[ index ];
        }

        updateLeap = () => {
            leap += 1;
        }

        performanceRun = () => {
            let start = Date.now();
            run()
            console.log( (Date.now() - start) / 1000 );
        }

        //run main function
        run();


    }
)()
