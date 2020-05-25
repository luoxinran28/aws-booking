export default class Trie {
  constructor() {
    this.root = {}; // The root of the Trie tree
    this.mapping = new Map(); // Used to map the lower case value to original value
  }

  /*
  For example:
  "All-star Pikachu Pokemon" will be mapped to:

  "allstar pikachu pokemon": "All-star Pikachu Pokemon"
  "allstar": "All-star Pikachu Pokemon"
  "pikachu": "All-star Pikachu Pokemon"
  "pokemon": "All-star Pikachu Pokemon"
  
  */
  mapToOrignalString(searchString, originalString) { 
    if (!searchString || searchString.length === 0) return;
    this.mapping.set(searchString, originalString);
  }

  getOriginalString(string) { 
    return this.mapping.get(string);
  }

  add(wordString) {
    if (wordString === null || wordString.length === 0) return;

    let searchString = wordString.toLowerCase().replace(/[^A-Z^a-z^0-9^\s]/g, '').trim();

    this.mapToOrignalString(searchString, wordString);
    this.insert(searchString);

    let words = searchString.split(' '); // Splitted by Space

    for (let word of words) { 
      this.mapToOrignalString(word, wordString);
      this.insert(word);
    }

  }

  search(word) { 
    let traverseResult = this.traverse(word);
    let result = new Set(); // Remove duplicates. "Pokemon" and "Pikachu" can be the same original string
    console.log(traverseResult)
    for (let r of traverseResult) { 
      result.add(this.getOriginalString(r));
    }
    return [...result];
  }


  insert(word) { 
    let cur = this.root;
    for (let ch of word) { 
      cur[ch] = cur[ch] || { isWord: false };
      cur = cur[ch];
    }
    cur.isWord = true;
  }

  /*
  The traverse function should return all the arrays that contains the given string characters.
  All given string characters should be included in the result.

  For examples:
    {Search: Return Array}
    "a": ["all-star pikachu pokemon", "alexa skills", "audible books & originals", ......, "appliances", "apps"]
    "al": ["all-star pikachu pokemon", "alexa skills"]
    "ap": ["appliances", "apps"]
    "apap": []
    "app": ["appliances", "apps"]
    "appse": []
  */
  traverse(string) { 
    let cur = this.root;
    let result = [];
    dfs(cur, 0, string, result, []);
    return result;

    function dfs(cur, start, str, result, sol) { 
      if (!cur) return;
      if (cur.isWord) {
        if (sol.length > 0 && start === str.length) { // Fully matched the given string
          result.push(sol.join(""));
        }
        // return; // We don't need to return because for searching "app" in "apps"
      }

      let curChar = str[start];
      if (cur[curChar]) { // Matched one character, then no need to pop the solution.
        sol.push(curChar);
        dfs(cur[curChar], start + 1, str, result, sol);
      } else { 
        for (let char in cur) { 
          sol.push(char);

          dfs(cur[char], start, str, result, sol);
          sol.pop();
        }
      }
      return;
    }
  }

}
