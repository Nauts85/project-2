## **Programs Used**
---
1. [W3C Markup Validation Service:](https://validator.w3.org/)
      * W3C Validation was used to validate all html5 code to conform to industry standards.
2. [W3C CSS Validation Service:](https://jigsaw.w3.org/css-validator/)
      * W3C Validation was used to validate all CSS3 code to conform to industry standards.
3. [Google Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/)
      * Google Lighthouse was used to check site wide functionality.
5. [similarweb](https://www.similarweb.com/browsers/)
      * Similarweb was used to find out the most popular browsers for March 2023.
6. [JShint](https://jshint.com/)
      * JShint was used to validate the script.js.
7. [Xconvert](https://www.xconvert.com/)_
      * Xconvert was used to compress sound files.
8. [CloudConvert](https://cloudconvert.com/)
      * CloudConvert was used to convert Wav files to Mp3.
9. [BrowserLing](https://www.browserling.com/)
      * Browserling was used to check compatability with the _Opera_ browser.

---

# AUTOMATED TESTING

## **Code Validation**
### index.html
  |ERRORS  | 
  |:------:|
  |2       |
1. **ERROR x 2**: The element button must not appear as a descendant of the a element.

       - Removed a tags from both start game button and how to play button.

![image of no errors](/assests/testing/images/document-completed.png)

---

### game.html
  |ERRORS  | 
  |:------:|
  |0       |
1. No errors were detected for game.html.

![image of no errors](/assests/testing/images/document-completed.png)

---
### style.css
  |ERRORS  | 
  |:------:|
  |0       |
1. No errors were detected for style.css.

![image of no errors](/assests/testing/images/css-validation.png)

### script.js
  |ERRORS  | 
  |:------:|
  |0       |
1. No significant errors were shown in my script.js errors shown were minor such as missing or unesscessary semi colons.

---

## **Performance**
Google Lighthouse was used to test every page on the site on **Mobile** & **Desktop**. Below are screen shots of each summary before and after changes were made.


### **index.html (DESKTOP)**

| BEFORE        | AFTER         | 
|:-------------:|:-------------:| 
|![image of glh summary on desktop before](/assests/testing/images/glh-index-dsk-bfor.png)      |![image of glh summary on desktop after](/assests/testing/images/glh-index-dsk-aftr.png)| 

### **index.html (MOBILE)**

| BEFORE        | AFTER         | 
|:-------------:|:-------------:|
|**Before image omitted because it was the same result as the image shown above.**|![image of glh summary on mobile](/assests/testing/images/glh-index-mob.png) |

### **game.html (DESKTOP)**

| BEFORE        | AFTER         | 
|:-------------:|:-------------:| 
|![image of glh summary on desktop before](/assests/testing/images/glh-game-dsk-bfor.jpg)      |![image of glh summary on mobile after](/assests/testing/images/glh-game-dsk-aftr.jpg)|


### **game.html (MOBILE)**

| BEFORE        | AFTER         | 
|:-------------:|:-------------:| 
|![image of glh summary on mobile before](/assests/testing/images/glh-game-mob-bfor.png)      |![image of glh summary on mobile after](/assests/testing/images/glh-game-mob-aftr.jpg)|

---

## **Main Google Lighthouse Issues**

### **issue #1 (PERFORMANCE)** 
**game.html (MOBILE)**

![image of google lighhouse file size warning](/assests/testing/images/glh-file-size-warn.jpg)

GLH flagged up that my file size was large, this was mainly due to the sound effects. I decided to trim the main game theme music with the intention of improveing performance. The entire track was over 3 minutes long which seemed a bit excessive. I reduced this to just over 1 minute and added a fade in effect to the track.

![image of trimmed sound file](/assests/testing/images/bg-music-file-trim.jpg)

In doing this i reduced the file size by a considerable amount as shown below.

| BEFORE        | AFTER         | 
|:-------------:|:-------------:| 
|![image of file size before](/assests/testing/images/bg-music-bfor.jpg)      |![image of file size after](/assests/testing/images/bg-music-aftr.jpg)|

However this was still resulting in poor site performance and did not make a noticeable difference. So i decided to compress my files using _[Xconvert](https://www.xconvert.com/)_  
Once the files were compressed the combined size was reduced by 2MB, this still wasn't enough of a reduction  
so i coverted all main game sound effects to Mp3 using _[CloudConvert](https://cloudconvert.com/)_ resulting in a massive drop of over 28MB.  
(**See Below**)

| BEFORE        | AFTER         | 
|:-------------:|:-------------:| 
|![image of file size before](/assests/testing/images/sounds-aftr-comp.jpg)      |![image of file size after](/assests/testing/images/sounds-mp3-aftr.jpg)|
      

---

### **issue #2 (SEO)**
GLH flagged up that meta tags were missing from both quiz pages and that adding them would improve the sites overall SEO. I decided to add these to **index.html** & **game.html**.
Below are the 2 meta tags added to each page:  
**index.html**
```html
<meta name="keywords" content="Video-Games, Quiz, Entertainment">
<meta name="description" content="A light hearted video game themed quiz with questions spanning the history of video games">
```
**game.html**
```html
<meta name="keywords" content="Quiz, Fun, Video Games">
<meta name="description" content="Exciting quiz game for the most passionate of gamers.">
```
--- 
## **Contrast**

GLH did not flag any issues with the contrast ratio of my website. Off white text with a light font weight against a dark background makes text easy to read.

# MANUAL TESTING

## **User Experience (UX)**
---
* ## **User Stories**
  * ### **User Goals**
    1. As a user i want the quiz to be simple to start.
       - _When arriving at the landing page users are shown a **large game start button** that when clicked launches the game and triggers a satifying sound to let you know the button has been clicked._
    2. As a user i want information about how the quiz works to be available before starting.
       - _Located on the landing page is a **how to play button** when clicked this displays a short paragraph explaning how the game will work._
    3. As a user i want to feel immersion while playing the game.
       - _The **main theme** of the game sets the mood of the quiz which is slow and thoughtful. Multiple **sound effects** are used throughout  
         the game to provide feed back to the user and increase the overall user experience._ 
    4. As a user i want clear feedback about correct or incorrect answers.
       - _When a question is answered correctly a unique **correct** sound effect plays to inform the user that they chose the correct answer. in additon  to this the button will also **flash green**. The **central display** will display a message of correct to the user and a **+1** animation will trigger next to the user score element._
       - _When a question is answered incorrectly a unique **incorrect** sound effect plays to inform the user that they chose the incorrect answer. in additon to this the button will also **flash red**. The **central display** will display a message of incorrect to the user before the next question is displayed._
    5. As a user i want to see clearly how many questions i have answered correctly.
       - _Located in the top right corner of the screen is a **player score indicator** this is updated when the user answers a question correctly a **+1** animation will also **draw users attention** to the score area._
    6. As a user i would like to see how many questions i have answered.
       - _Located on the left hand side of the question container is a **question counter** that increments by 1 everytime a new question is shown to the user._
    7. As a user i want to have an in game options menu to change options about the quiz or return to the main menu.
       - _Located in the top right hand corner of the screen is an **options menu** when clicked a drop down menu will appear, this containes the **mute button checkbox**, **exit-game button** and **close menu button** clicking the **exit game button** will ask to **confirm** that you would like to return to the main menu or simply **cancel** and **return to the game**._

 * ### **Developer Goals**
    1. As a Developer i want to create a feeling of immersion for the user.
       - _when arriving at the landing page users are shown a **gaming themed background**, coupled with **stylish buttons** that trigger a **retro sound effect** when moused over. (reminiscent of the Resident Evil inventory sound.) When the Start Game button is clicked an **attention grabbing sound** plays (reminiscent of the DOOM start game button.)_
       - _Before the game launches a short **intro** is played introducing the game, this helps to **build interest** and **anticipation** for the user. this leads to to a **reveal curtain effect** (Or fake wall if you prefer.) that reveals the game area._
       - _Video game style **sound effects** and **fonts** have been selected to increase user immersion when playing the game._
       - _When mouseing over buttons on the game screen the **cursor changes to a crosshair** further increasing immersion._
    2. As a Developer i want to maintain the users attention for the duration of the game.
       - _**Sound effects** play a large role in maintaining the users attention during the game. **Mouse over effects** on the answer options help to maintain the users attention when deciding on an answer. the combination of **sound and visual indicators** creates an interesting game environment when doing something as simple as deciding which option to choose._
       - _When an option is chosen clicking it produces a **sound effect** and **3 visual feedback indicators** for a correct answer and 2 for an incorrect answer. A **flashing button**, an **animated central display** providing **user feedback** and if the answer was correct a **+1 animation** next to the score element._ 
       - _**Progress messages** are displayed on the **central display** at the half way point with a **custom message** to the user depending on the score they have achieved. The **central display** also informs the user they are on the final question before the quiz awards the users rank. Both of these messages are coupled with a **sound effect** in order to grab the users attention_
    3. As a Developer i want to create a pleasant game environment.
       - _The main game page is **simple** and **effective**. The layout is similar to some **tv game shows**, the 4 answer options and the question above is a popular quiz format and is widely used for good reason._
       - _The **options menu** is clearly visible in the top right corner, it doesn't distact from the main game experience and is styled in a way to fit the page style_
       - _**Sounds** were chosen that are **subtle** and not offesive to the ears, the **main theme** is subtle enough to not become an annoyance to the user. However if the user should want to **mute** the main theme there is an option for that in the **options menu**._
    4. As a developer i want to reward the users effort for completing the quiz.
       - _When all questions have been answered a message is displayed congratulating the user on completing the quiz. this is coupled with a chirpy sound effect that provides of feeling of achievement to the user._ 
       - _**Coloured text** and an **animated icon** inform the user on what **rank** they have achieved. There are **4 ranks in total** starting at **Bronze** and ending with **Diamond**._
    5. As a Developer i want the application to be easy to update with additional content.
       - _Questions to the quiz are located at the top of the **script.js**, **adding new questions is simple**. either update the questions that are already created or add your own onto the end (although this would require modifications to the get question function and some logic.)_
       - _**Extra display messages** can easily be added with a slight modification to the **mid game sequence function**._
       - _The end screen could easily have **extra ranks added**. These are created with **template literals** and **JQuery**. inserting new variable into the script is easily done._

## **Play Testers**
In Order to test the human element and overall experience of the game. I reached out to friends and family and asked them to try the game, then answer a few questions about their experience.

### Human Test #1
  * Name: Jack
  * Age: 8
  * Interests: Gaming, Swimming, Playing.

  | DID YOU ENJOY THE GAME | FEEDBACK | ANY BUGS EXPERIENCED | DEVICE TESTED ON|
|:---:|:---:|:---:|:---:| 
| YES | ENJOYED MOUSE OVER SOUND | NONE | WINDOWS PC |

### Human Test #2
  * Name: Claire
  * Age: 37
  * Interests: Television, Socialising, Music.

  | DID YOU ENJOY THE GAME | FEEDBACK | ANY BUGS EXPERIENCED | DEVICE TESTED ON|
|:---:|:---:|:---:|:---:| 
| YES | LIKED COLOUR SCHEME AND QUESTION AREA LAYOUT | NONE | DESKTOP |

### Human Test #2
  * Name: Tom
  * Age: 38
  * Interests: Gaming, Football, The Pub.

  | DID YOU ENJOY THE GAME | FEEDBACK | ANY BUGS EXPERIENCED | DEVICE TESTED ON|
|:---:|:---:|:---:|:---:| 
| YES | LIKED OPTIONS MENU | NONE | SAMSUNG S21 |

### Human Test #2
  * Name: Tamzin
  * Age: 36
  * Interests: Gaming, Football, The Pub.

  | DID YOU ENJOY THE GAME | FEEDBACK | ANY BUGS EXPERIENCED | DEVICE TESTED ON|
|:---:|:---:|:---:|:---:| 
| YES | WELL WORDED, CHALLENGING, DISPLAY TIMES TO SHORT | NONE | SAMSUNG ULTRA |

### Human Test #2
  * Name: Brett
  * Age: 40
  * Interests: Gaming, red dwarf, More Gaming.

  | DID YOU ENJOY THE GAME | FEEDBACK | ANY BUGS EXPERIENCED | DEVICE TESTED ON|
|:---:|:---:|:---:|:---:| 
| YES | POSSIBLY HIGHLIGHT CORRECT ANSWER | NONE | WINDOWS PC |

### Human Test #2
  * Name: Mark
  * Age: 31
  * Interests: Gaming, Photography, Rock Music.

  | DID YOU ENJOY THE GAME | FEEDBACK | ANY BUGS EXPERIENCED | DEVICE TESTED ON|
|:---:|:---:|:---:|:---:| 
| YES | POSSIBLY HIGHLIGHT CORRECT ANSWER | LINGERING BLUE HIGHLIGHT ON PREVIOUS CHOICE | OPPO |

### Human Test #2
  * Name: Mark
  * Age: 34
  * Interests: Gaming, Anime, Hiking.

  | DID YOU ENJOY THE GAME | FEEDBACK | ANY BUGS EXPERIENCED | DEVICE TESTED ON|
|:---:|:---:|:---:|:---:| 
| YES | MORE WARCRAFT QUESTIONS | NONE | ANDROID |

### Results
From doing the play test 3 issues were brought to my attention  

 ---
**POSSIBLY HIGHLIGHT CORRECT ANSWER**
- _The choice to not highlight the correct answer when a user makes the wrong choice was deliberate.  
The reason behind my decison was to encourage the user to try agaim amd get a higher score.  
However it was rasied by several testers that they would have like to have seen the actual correct answer.
In a future update this option could be added to the start game function as a way to customise your experience._

**DISPLAY TIMES TO SHORT**
 - _One tester brough up the fact that she almost missed what the display messages were.  
This was interesting to me as i wasn't sure if they may have been a little short myself and was grateful to have that confirmed.  
in response to this feedback i have incresed the display time functions by 0.25s_

**LINGERING BLUE HIGHLIGHT ON PREVIOUS CHOICE**  
 - _One tester highlighted a bug where the previous questions choice was still showing the blue highlight effect.  
this wasn't reported by any other users. The device used was an Oppo device.  
Curretnly i am unable to replicate this bug, however it is something that will be addressed in a future update._


## **Browser Compatability**
A list of the most popular browsers used in March 2023 was used to decide which browsers to test the website on. 

![image of popular browsers](/assests/testing/images/pop-browsers.jpg)

|BROWSER|LAYOUT MAINTAINED|EFFECTS MAINTAINED|SOUNDS MAINTAINED|COMPATABLE|
|:-----:|:---------------:|:----------------:|:---------------:|:--------:|
|CHROME|YES|YES|YES|YES|YES|
|FIREFOX|YES|YES|YES|YES|
|EDGE|YES|YES|YES|YES|YES|
|OPERA|YES|YES|YES|YES|YES|
|SAFARI|YES|PERMANENT BLUE HIGHLIGHt ON ANSWER OPTIONS|ALL BUT THEME TUNE|YES|

Additional note on the Safari compatability test, In order to test on Safari i accessed the website from my Mobile Device (Iphone 11).  
The game still functions as intended however the main theme tune did not play.  
I can only assume that this is related to the default browser settings and is something the user would need to change on their device.

## **Device Compatability**

|DEVICE|BUGS/ISSUES|
|:-----:|:---------------:|
|WINDOWS PC|NONE|
|SAMSUNG ULTRA|NONE|
|IPHONE 11|NONE|
|Oppo|BLUE HIGHLIGHT LINGER|
|IPHONE 12 PRO|NONE|
|IPHONE SE |NONE|


## Manual Feature Tests

**index.html**

| FEATURE | INTENDED OUTCOME | TESTING METHOD PERFOMRED | RESULT | PASS/FAIL |
|:---:|:---:|:---:|:---:|:---:|
| Start Button | Clicking starts the Game | Clicked Logo | Home page reload | Pass |
| How to play button | Takes users to Activities page  | Clicked button | Navigates to Activities page | Pass |
| Close rules button | Open map in new window | Clicked link | Opened map in new window | Pass |

**game.html**

| FEATURE | INTENDED OUTCOME | TESTING METHOD PERFOMRED | RESULT | PASS/FAIL |
|:---:|:---:|:---:|:---:|:---:|
| Options Button | Clicking opens the options menu | Clicked Options | Options open | Pass |
| Mouse over blue effect | Highlights text and button  | Moused over | Effect triggers | Pass |
| Mouse over crosshair | Crosshair on selected elements | Moused over | Effect triggers | Pass |
| Mute checkbox | Mutes music  | checked box | Music muted | Pass |
| Exit game button | Confirm prompt  | Clicked button | Prompt Appears  | Pass |
| Confirm prompt | Returns to main menu | Clicked button | Returned to main menu | Pass |
| Cancel prompt | Closes prompt and options | Clicked button  | Prompt and options close | Pass |
| Close options button | Closes options | Clicked button | Options close | Pass |
| Green Correct answer effect | Correct answer flashes green | Clicked answer | Effect triggers | Pass |
| Red incorrect answer effect | incorrect answer flashes red | Clicked incorrect answer | Effect triggers | Pass |
| +1 Score animation | +1 animation on correct answer | Clicked answer | Effect triggers | Pass |
| Half way message animation | Animation at question 10 | Played game | Effect triggers | Pass |
| Final Question animation | Animation at question 20 | Played game | Effect triggers | Pass |
| Rank main menu button | returns to main menu | Clicked button | Returned to main menu | Pass |




## **Bugs/Issues**

**game.html**  
During Manual testing i noticed that when answering a question incorrectly, the red effect would still remain when  
the next question is displayed.  
**See Below:**  

![image of bug](/assests/testing/images/lingering-effects-bug-ipad.jpg)

After investigation i noticed the problem was a mistake with the remove class syntax.  
I had put a comma between the two classes and only one was removed by the code.  
After removing the comma the code was corrected, tested manually again and the bug is fixed.  
**See Below:**

![image of bug](/assests/testing/images/incorrect-ans-bug-fix.jpg)


### **Refactoring**

**game.html**
 After studying my code in more detail i noticed that the end rank screen function was 109 lines long.

| BEFORE        | AFTER         | 
|:-------------:|:-------------:| 
|![image of refac code](/assests/testing/images/refac-end-game-func-strt.jpg)      |![image of file size after](/assests/testing/images/refac-end-game-func-end.jpg)|
 
- This seemed excessive so i decided to try and reduce the size of the code overall.  
I managed to split the function into 2 seperate functions and reduced the length of the code to 39 lines.

| RANK CREATION () | RANK CALC () | 
|:-------------:|:-------------:| 
|![image of refac code](/assests/testing/images/refac-rank-scr-aftr.jpg)      |![image of file size after](/assests/testing/images/refac-rank-aftr.jpg)|

- I also decided to split the function for calcualting the correct answer to reduce the overall size of the code.

| BEFORE | AFTER | 
|:-------------:|:-------------:| 
|![image of refac code](/assests/testing/images/refac-getAnswer-func-bfor.jpg)      |![image of file size after](/assests/testing/images/refac-getAnswer-func-aftr.jpg)|

---