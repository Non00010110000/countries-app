import React, { useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import Countries from './Countries';

const Search = () => {
  const isDark = useSelector((state) => state.dark.isDark);
  const [searchQuery, setSearchQuery] = useState('');
  const [search,setSearch] = useState(false);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setSearch(!search)
  };

  return (
    <>
    <form onSubmit={(e)=> e.preventDefault()}>
      <Stack spacing={4}>
        <InputGroup>
          <InputLeftElement pointerEvents='none'>

          </InputLeftElement>
          <Input
            className={isDark ? "input-dark" : 'input'}
            type='text'
            placeholder='Search for a country..'
            onChange={handleSearch}
          />
        </InputGroup>

      </Stack>
    </form>
      <Countries searchQuery={searchQuery} search={search} />
    </>
  );
};

export default Search;
