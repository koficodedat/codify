(
    () => {

        const inputs = process.argv.slice(2);

        const command = inputs[0];
        
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

            console.log(`compressed: ${compressed}`);
        }


        uncompress = ( string_ ) => {
            let uncompressed = [];

            let input = string_.split(/([A-Za-z])/);

            for( let i = 0; i < input.length; i += 2 ){
                const times = input[i];
                const letter = input[i + 1];
                if( times ){
                    uncompressed = uncompressed.concat( buildChunk( letter, times ) ); 
                }
            }

            console.log(`uncompressed: ${uncompressed.join('')}`);
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

        //main
        switch( command ){
            case 'c':
                const asArray = input.split('');
                compress( asArray );
                break;
            case 'uc':
                uncompress( input );
                break;
            default: 
                return 'should never come here but if it does.... oh well';
        }
    }
)()