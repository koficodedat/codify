const performance = require('./performance');
(
  () => {
      const array = process.argv.slice(2)[0].split(',').map( stringValue => parseInt(stringValue) );
      const target = process.argv.slice(2)[1];
      const withP = process.argv.slice(2)[2];

      if( !array ) throw Error('Argument missing: What is the input array');
      if( !target ) throw Error('Argument missing: What value should the two numbers sum up to?');
      if( !Array.isArray( array ) ) throw Error('Wrong datatype: Argument (1) must be an array');
      if( isNaN( target ) ) throw Error('Wrong datatype: Argument (2) must be a number');

      const map = new Map();

      const hasCompliment = (value) => {
        if( map.size === 0 ) return false;
        if( map.has( value) ) return true;
        return false;
      }

      const run = () => {
        let result = [];

        for( let i = 0; i < array.length; i++ ){
          const compliment = target - array[i];
          if( hasCompliment( compliment ) ) {
            result = [ map.get( compliment ), i ]
            break;
          }
          map.set( array[i], i );
        }

        console.log('Input: ', `Array: [${array}]. Target: ${target}.`)
        console.log(`Output: ${result.length == 2 ? `Values as indices ${result[0]} and ${result[1]} sums up to ${target}` : `Nothing sums up to ${target} in giving array`}.`);
      }

      //main
      switch( withP ){
        case '-p':
          performance( run );
          break;
        case undefined:
          run();
          break;
        default: 
            return 'should never come here but if it does.... oh well';
    }
  }
)()
