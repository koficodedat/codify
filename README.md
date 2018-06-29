# Codify: A series of solutions of coding problems I find all around the web written in Node.js

*All solutions need Node.js to run.*

## SOLUTIONS:

 - ### N doors

	 ( Credit [Rosetta Code](http://rosettacode.org/wiki/100_doors) for explanation )

	You make N passes by the doors.
	The first time through, visit every door and  toggle  the door  (if the door is closed,  open it;   if it is open,  close it).
	The second time, only visit every 2nd door   (door #2, #4, #6, ...),   and toggle it.
	The third time, visit every 3rd door   (door #3, #6, #9, ...), etc,   until you only visit the Nth door.

	####	Question:
		What state are the doors in after the last pass? 
		Which are open, which are closed?

	#### How to run:
		node ndoors.js [number-of-doors]
		
 - ### Run-Length Encoding

	 ( Credit [Rosetta Code](http://rosettacode.org/wiki/Run-length_encoding) for explanation )

	Given a string containing uppercase characters (A-Z), compress repeated 'runs' of the same character by storing the length of that run, and provide a function to reverse the compression. The output can be anything, as long as you can recreate the input with it.

	#### How to run:
		node runlength.js c [range-of-alphabets] //for compress.
		node runlength.js uc [range-of-alpha-numeric-values] //for un-compress.
		
	#### Example:
		node runlength.js c DDDDDHHHHSSS gives you 5D4H3S
		node runlength.js uc 5D4H3S gives you DDDDDHHHHSSS
