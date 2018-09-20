const performance = require('./performance');
const Node = require('./utility/singlylinkedlist');
(
  () => {
      const array1 = process.argv.slice(2)[0].split('-').map( stringValue => parseInt(stringValue) );
      const array2 = process.argv.slice(2)[1].split('-').map( stringValue => parseInt(stringValue) );
      const withP = process.argv.slice(2)[2];

      if( !array1 ) throw Error('Argument missing: What is the input array');
      if( !array2 ) throw Error('Argument missing: What is the input array');

      const getLinkedList = ( array ) => {
        let node = null;
        array.forEach(element => {
          if( node ) node.add( element );
          else node = new Node( element );
        });
        return node;
      }

      const formatNodeToReadable = (node) => {
        return node.toString();
      }

      const formatNodeToReverseReadable = (node) => {
        return Number( node.toString().split(' -> ').reverse().join().replace(/,/g,'') );
      }

      let l1 = getLinkedList( array1 );
      let l2 = getLinkedList( array2 );
      let carry = 0;
      let result = null;
      let count = 0;
      let size = Math.max( l1.size(), l2.size() );

      const inputFormat = `(${l1.toString()}) + (${l2.toString()})`;
      const reverseL1 = formatNodeToReverseReadable( l1 );
      const reverseL2 = formatNodeToReverseReadable( l2 );

      const run = () => {
        
        while( count < size ){

          count++;
          
          let value = 0;

          if( l1 ){
            value += l1.val;
            if( l1.hasNext() ) l1.setHeadToNext();
            else l1 = null;
          }

          if( l2 ){
            value += l2.val;
            if( l2.hasNext() ) l2.setHeadToNext();
            else l2 = null;
          }

          if( result ){
            result.add( (carry + value) % 10 );
            carry = Math.floor( value / 10 );
          }
          else{
            result = new Node( (carry + value) % 10 );
            carry = Math.floor( value / 10 );
          }
        }

        console.log( 'Input: ', `${inputFormat}.` );
        console.log( 'Output: ',  `${formatNodeToReadable(result)}.` );
        console.log( 'Explanation: ', `${reverseL1} + ${reverseL2} = ${formatNodeToReverseReadable(result)}.`);
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
