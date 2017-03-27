# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Sublime Fundamentals (75 min)

| Timing | Type | Topic |
| --- | --- | --- |
| 10 min | [Opening](#opening) | Topic |
| 5 min | [Install Sublime Text](#install-sublime) | Installation |
| 5 min | [Text Editor Overview](#text-editor-overview) | Topic |
| 20 min | [Using Sublime](#using-sublime) | Using Sublime |
| 10 min | [Guided Practice](#guided) | Topic |
| 20 min | [Exercises](#exercises) | Group Exercises |
| 5 min | [Conclusion](#conclusion) |Topic |

### LEARNING OBJECTIVES
*After this lesson, you will be able to:*

- Explain the difference between text and binary files.
- Install Sublime Text 3 using brew cask.
- Modify the configuration of Sublime to set the theme, font, tab settings, etc.
- Launch Sublime from the command line.
- Use Find to search the current file, or all of the files.
- Install plugins from Package Control, or from source
- Learn Sublime editing tricks such as:
  - Selecting and editing several things at once.
  - Moving a selected line up or down.
- Use keyboard shortcuts to save time.


<!-- can you expand on this? -->

### STUDENT PRE-WORK
*Before this lesson, you should:*

- Get familiar with how to create and edit files in Sublime Text.

### INSTRUCTOR PREP
*Before this lesson, instructors will need to:*

- Gather the materials needed for class.
- Complete all required prep work.
- Prepare any specific instructions.

---
<a name="opening"></a>
## Opening (10 min)
- Review current lesson objectives.
- Include a hook/real-world relevance (Why is the content from this lesson is useful or important?).

The main purpose of this lesson is to get you comfortable with the
Sublime Text editor, including how to configure it, install plugins, and get
*greedy* about discovering faster, more efficient ways to edit files.

Ask for a volunteer to act out a traveler running late for their flight. Instructor will demonstrate the importance of knowing how to work a keyboard efficiently.

***

<a name="install"></a>
## Install Sublime Text (5 min)

#### Install Homebrew

Copy and paste the following into your terminal window:

```bash
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

#### Install Sublime (Using Brew and Cask)

Copy and paste the following into your terminal window:

```bash
brew tap caskroom/cask
brew tap caskroom/versions
brew cask install sublime-text
```

<a name="text-editor-overview"></a>
## Text Editor Overview (5 min)

#### What is a Text Editor?
* It provides an interface for viewing and modifying text files.
* Text files are files containing text that's readable by humans.
* Text files are encoded via ASCII or Unicode characters.
* There are different *kinds* of text editors:
    - Terminal/command line: Vim, Emacs, GNU nano
    - Window-based: Sublime, TextMate, Notepad++

#### Modern Text Editors
* Can open a file or directory.
* Can understand context.
    - Feature context-sensitive help.
    - May highlight errors or bad practices in your code.
    - Adapt to different file formats.
    - Provide syntax highlighting.

* Extensions and plugins are used to add additional features to a text editor.

#### Types of Text Files
* Plaintext
* Markdown
* CSV
* Various programming languages:
    - HTML
    - CSS
    - JavaScript
    - Ruby
    - BASH
    - SQL
* Each programming language has a set of rules, keywords, operators, and syntax.

#### Sublime Text is:
* Multi-platform (OS X, Windows, Linux).
* Popular (widely used for web development).
* Free to try (although you will be nagged to make a purchase).
* Extendable (You can add functionality via plugins).

#### Sublime Versions
* Be sure that you've installed Sublime Text **3**.


<a name="using-sublime"></a>
## Using Sublime (20 min)
#### Launching Sublime

To open Sublime, simply click the icon in the Dash or Launchpad.
Or, type `subl` in the terminal.

To open Sublime with a specific file, we can use the command line once again,
this time passing in a file name like so:

```bash
mkdir recipes
subl recipes/veggie_soup.txt
```

#### Project Mode

Real-world software projects often involve _many_ files, which are organized into
folders. It's handy to be able to see all files in our project while
working in our text editor. Sublime makes this easy, as it supports a
project mode. To use this mode, we simply pass a directory instead of a file:

```bash
subl recipes
```
or...

```bash
cd recipes
subl .
```

Notice that the sidebar now has a folders section that shows all files
and folders in the project. Clicking on a folder expands the view to display its
contents.

#### Take a Tour of the Sublime Editor's Window Components

* Menu
* Sidebar
* Open files via tabs
    - Rearrange tabs
    - Change layout of tabs — `Alt-Command-<Number>`
* Edit pane
* Ruler
* Minimap
* Footer
    - Line #, Column #
    - White Space Mode
    - File Type

#### Find (Search)

* You can search through a single file or all open files.
* Your searches can be case sensitive or insensitive.
* You can search using regular expressions (We will talk about these later).

#### Settings and Themes

`cmd + ,` allows you to access Sublime's preferences.

It opens a file as a JSON object (We will more about JSON in the next
few weeks) and basically presents its settings as a series of keys and values.
- You can add keys/values, and/or modify the existing values to fit your personal preferences.

**For now, add the following:**

```json
{
    "ensure_newline_at_eof_on_save": true,
    "fade_fold_buttons": false,
    "font_face": "Menlo",
    "font_size": 12,
    "highlight_line": true,
    "highlight_modified_tabs": true,
    "indent_to_bracket": true,
    "line_padding_bottom": 1,
    "line_padding_top": 1,
    "open_files_in_new_window": false,
    "rulers":
    [
        78
    ],
    "soda_classic_tabs": true,
    "soda_folder_icons": true,
    "tab_size": 2,
    "translate_tabs_to_spaces": false,
    "trim_trailing_white_space_on_save": true,
    "word_separators": "./\\()\"'-:,.;<>~!@#%^&*|+=[]{}`~?",
    "word_wrap": "false"
}
```

We can change Sublime's color scheme by going to `preferences/color scheme` and selecting one of the available themes. We recommend **Sunburst** or **Dawn**. When you select a scheme, it changes all of the syntax highlighting colors.

## Package Control

Sublime is compatible with many plugins, and we will install new ones almost every week. In the past, you would have had to download the package manually and add it to Sublime's plugins folder. Now, there is a package manager for Sublime, which works a bit like brew; you ask for a package, and Sublime will install it for you.

In short, Sublime is highly customizable. You can play around by editing your user settings and installing plugins. We will do this using *Package Control*.

To install *Package Control*, follow the instructions [here](https://packagecontrol.io/installation#st3).
Note that there are different instructions in ST2 and ST3.

#### Install Some Plugins!

Now we will use *Package Control* to install the following plugins:

1. Advanced New File
	- We can test out the plugin by creating a new file:
		- Create a New File (AdvancedNewFile plugin) — `Alt-Command-N`.
2. Sidebar Enhancements (only available for ST3)
	- Now, when you right-click on any folder or file in the sidebar, you'll see a whole list of options for actions you can perform on these files.
3. Emmet
	- Emmet provides us with a whole range of autocomplete shortcuts for writing HTML.



## Navigating Text With The Power Of Your Mind (read: keyboard)

There are a few important keyboard tricks that you should learn. These may take awhile to master, but in the end you will be a much more efficient typist. The less you touch your trackpad, the less you have to clean it (oh, you also type faster).

Try these tricks with the following snippet of text.

> I do not know where family doctors acquired illegibly perplexing handwriting nevertheless,
> extraordinary pharmaceutical intellectuality counterbalancing indecipherability,
> transcendentalizes intercommunications incomprehensibleness

Holding OPTION and pressing the LEFT/RIGHT arrow keys moves the cursor to the next word.

Holding CMD and pressing the LEFT/RIGHT arrow keys moves the cursor to the beginning/end of the line.

Holding SHIFT and pressing the LEFT/RIGHT arrow keys highlights text. Pressing the UP/DOWN arrows keys will increase the selection vertically.

Holding SHIFT, in conjunction with OPTION (for words) or CMD (to the linebreak), will highlight sections of the text.

When you become more comfortable programming, these skills will help you edit programs much quicker. Next time you are reaching for the mouse or furiously jamming on the arrow keys, think about how you could better navigate with the keyboard.

## Editing In Bulk, With Multiple Selectors

> banana orange banana orange banana yummyorange banana orange banana orange

Hold down CMD and click somewhere to add a cursor. When you are ready, begin typing.

Hold down CMD and highlight with the mouse to create multiple cursor selections. You can highlight by dragging the mouse, or by double clicking a word.

If you wish to replace many instances of a word, you can do so quickly by using CMD + D. This will select the next instance of the currently highlighted word.

Try this: set your cursor to be in the middle of the word 'orange'. Hit CMD + D until the end. Why was the orange in 'yummyorange' skipped? Do the same, but this time highlight the first 'orange' and then hit CMD + D. Using CMD + D without a highlighted selection will always looks for a perfect word match.

## Shortcuts To Know

CMD + P: Open a file. It's fuzzy!

CMD + SHIFT + P: Run a command.

CMD + OPTION + #: Open panes horizontally

CMD + SHIFT + OPTION + #: Open panes vertically

CMD + SHIFT + T: Open most recently closed file

CMD + W: Close current file

CMD + F: find in file

CMD + OPTION + F: replace in file

CMD + SHIFT + F: find/replace in project

CMD + CTRL + UP/DOWN: Move a line up and down

CMD + L: Select the entire line

<a name="guided"></a>
## Guided Practice (10 min)

In this code-along, we will refactor some bad JavaScript.

Get the code from "bad.js".

<a name="exercises"></a>
## In-Class Missions (20 min)

Your mission is clear. Find a partner, and tackle the problems listed in exercises.txt.

***

<a name="conclusion"></a>
## Conclusion (5 min)
- Review independent practice deliverable(s).
- Recap topic(s) covered in today's lesson.
- Cover homework and/or upcoming tasks.

### ADDITIONAL RESOURCES
- Exercises
	- [Sublime Practice](https://www.shortcutfoo.com/app/dojos/sublime-text-2-mac)
- Videos
	- [Sublime YouTube videos](https://www.youtube.com/playlist?list=PLLnpHn493BHEYF4EX3sAhVG2rTqCvLnsP)
- Readings
	- [Efficiency With Sublime Text](http://thunderboltlabs.com/blog/2013/11/19/efficiency-with-sublime-text-and-ruby/)
	- [Scotch.io Tutorials](https://scotch.io/tag/sublime-text)
	- [Sublime Text Keyboard Shortcuts](http://www.wdtutorials.com/2013/06/23/sublime-text-keyboard-shortcuts-cheat-sheet-win-os-x-and-linux#.VT2F161Viko)

- Decks

> Instructor Note: When possible, provide a brief description of Additional Resources, classifying whether they are for beginner or advanced students.
