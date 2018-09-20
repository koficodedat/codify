const performance = require('./performance');
(
    () => {

        const inputs = process.argv.slice(2);

        const command = inputs[0];
        const withP = inputs[2];
        
        if( !(command === 'c' || command === 'uc') ) throw Error("Expteced either 'c' or 'uc' as command");

        const input = inputs[1];

        compress = ( array ) => {

            const _length = array.length;

            let compressed = '';
            let current = array[0];
            let previousIndex = 0;

            array.forEach( (element, index ) => {

                if( current !== element ){
                    compressed += `${index - previousIndex}${current}`;
                    current = element;
                    previousIndex = index;
                }
                else if( _length - 1 === index ){
                    compressed += `${_length - previousIndex}${current}`
                }
    
            });

            console.log(`Input: ${input}.`)
            console.log(`Output: compressed: ${compressed}`);
        }


        uncompress = ( string_ ) => {
            let uncompressed = [];

            let stringWithSplit = string_.split(/([A-Za-z])/);

            for( let i = 0; i < stringWithSplit.length; i += 2 ){
                const times = stringWithSplit[i];
                const letter = stringWithSplit[i + 1];
                if( times ){
                    uncompressed = uncompressed.concat( buildChunk( letter, times ) ); 
                }
            }

            console.log(`Input: ${stringWithSplit.join('')}.`)
            console.log(`Output: uncompressed: ${uncompressed.join('')}.`);
        }

        buildChunk = ( letter, times ) => {
            
            let result = [];
            let count = 0

            while( count < times ){
                result.push( letter );
                count++;
            }

            return result;
        }

        let run = null;

        //main
        switch( command ){
            case 'c':
                run = () => {
                    const asArray = input.split('');
                    compress( asArray );
                } 
                if( withP === '-p' ) performance( run );
                else run();
                break;
            case 'uc':
                run = () => {
                    uncompress( input );
                } 
                if( withP === '-p' ) performance( run );
                else run();
                break;
            default: 
                return 'should never come here but if it does.... oh well';
        }
    }
)()