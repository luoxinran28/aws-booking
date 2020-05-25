import React, { Component } from 'react';
import { render } from '@testing-library/react';
import Trie from './Trie';
import { getCategories } from '../services/fakeCategoriesService';

    // console.log(options, this.state.trie.root)
    // console.log("a", this.state.trie.traverse("a"));
    // console.log("al", this.state.trie.traverse("al"));
    // console.log("ap", this.state.trie.traverse("ap"));
    // console.log("apap", this.state.trie.traverse("apap"));
    // console.log("app", this.state.trie.traverse("app"));
    // console.log("appse", this.state.trie.traverse("appse"));


const data = ["allstar", "allstar pikachu pokemon", "alexa", "alexa skills", "audible", "audible books  originals", "automotive", "automotive parts  repairs", "amazon", "amazon devices", "amazon warehouse", "amazon pantry", "appliances", "apps", "airpnp", "art", "arts", "arts crafts  sewing", "accessories", "and", "pikachu", "pokemon", "parts", "pantry", "payment", "personal", "pet", "pet supplies", "phones", "products", "premium", "premium beauty", "prime", "prime video", "books", "boxes", "beauty", "beauty  personal care", "baby", "business", "originals", "outdoor", "outdoors", "office", "office products", "skills", "sewing", "services", "shoes", "scientific", "store", "subscription", "subscriptions", "subscription boxes", "supplies", "smart", "smart home", "software", "sports", "sports  outdoors", "devices", "digital", "digital educational resources", "digital music", "warehouse", "whole", "whole foods market", "crafts", "credit", "credit and payment cards", "care", "cards", "cds", "cds  vinyl", "cell", "cell phones  accessories", "clothing", "clothing shoes  jewelry", "collectibles", "collectibles  fine art", "computers", "courses", "repairs", "resources", "vinyl", "video", "video games", "vehicles", "jewelry", "fine", "food", "foods", "educational", "electronics", "music", "musical", "musical instruments", "magazine", "magazine subscriptions", "market", "movies", "movies  tv", "garden", "garden  outdoor", "games", "gift", "gift cards", "grocery", "grocery  gourmet food", "gourmet", "gear", "handmade", "health", "health household  baby care", "household", "home", "home  business services", "home  kitchen", "kitchen", "kindle", "kindle store", "industrial", "industrial  scientific", "instruments", "improvement", "luggage", "luggage  travel gear", "travel", "tv", "tools", "tools  home improvement", "toys", "toys  games"];


test("Build Trie tree based on categories data", () => {
  const trie = new Trie();
  expect(trie).not.toBeFalsy();
  for (let item of data) { 
    trie.add(item);
  }
  expect(Object.keys(trie).length).toBeTruthy();
});

test("Search result should match the expectation", () => {
  const trie = new Trie();
  for (let item of data) { 
    trie.add(item);
  }
  expect(trie.traverse("a").length).toEqual(20);
  expect(trie.traverse("b").length).toEqual(6);
  expect(trie.traverse("al").length).toEqual(4);
  expect(trie.traverse("ap").length).toEqual(2);
  expect(trie.traverse("app").length).toEqual(2);
  expect(trie.traverse("apap").length).toEqual(0);
  expect(trie.traverse("apps").length).toEqual(1);
  expect(trie.traverse("appse").length).toEqual(0);

});