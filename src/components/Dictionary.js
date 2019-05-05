import React from 'react';
import SearchBar from 'components/search-bar';
import Entries from 'vocabulaire/entries';

export default function Dictionary() {
  return (
    <div data-e2e="dictionary" className="top">
      <SearchBar data-e2e="search-bar" />
      <Entries />
    </div>
  );
}
