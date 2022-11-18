# Mixed Messages

## Plan your Project
Visualize your end result. What is it built with? What can it do? Make sure that it satisfies all of the project objectives.

Project Requirements:
1. Build a message generator.
2. Every time a user runs a program, they should get a new, randomized output. Output can be about astrology, inspirational message, or nonsensical joke.
3. To make the program truly random. the message that it outputs should be made up of at least three different pieces of data.

Make a timeline for yourself and avoid the temptation to build things that aren't required. Setting the boundaries and deadlines will keep you on track and avoid scope creep.

>* project will be created in JavaScript
>* will be able to be ran from the command line
>* timeline for project will be completed in two hours

## Come Up with a Topic
Decide what types of messages you want your program to output.

>* random funny quotes about aging

## Create script and run it locally
On your computer, create a JavaScript file to write your code in. Make sure you are able to run your script locally in Node.

>* script file: ageQuote.js created.

## Set up version control
Set up Git tracking in your directory and add and commit changes as you make them.

>* git init
>* git add .
>* git commit -m 'First commit'

## Store message components
Decide how to store all of the message components for your game.

>quotes are stored in multiple arrays
>1. quotes : array of pre-defined quotes by famous people
>2. array1Noun
>3. array2Noun
>4. PeriodOfTimeNoun
>5. BecomeOlderVerb

## Create the message
Add functionality to randomly select the different message components so the can create a cohesive message.

>* function created to randomly pull from any of the predefined quotes
>* a function has been created to build a random message from the last four arrays mentioned above. This in turn builds a message that is returned to the user.

## Put the program together
Combine the different parts of your program so the random message are selected, combined, and then displayed to user each time they run the program.

>* a function has been created, includes error handling try-catch block

## Next Steps
You're welcome to expand your program beyond these project tasks and get creative! The random predefined quote is an additional item that was not in the original definition.

>* mix up the noun positions - 1 to 2, 2 to 3, 3 to 1 - should be random as to the order, but at no time should the nouns cross
>* create a web interface for this - a simple html page with both quotes displayed.
>* give the user the option to decide which quotes they want to see
>* Add additional nouns and verbs to add more variety.
