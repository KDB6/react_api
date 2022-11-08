import React, {useRef} from 'react'

const MovieSearch = ({onSearch}) => {

    const inputRef = useRef();

    const handleSearch = () => {
        const value = inputRef.current.value;
        onSearch(value);
    }

    const onKeyPress = (event) => {
        if(event.Key === "Enter") {
            handleSearch();
        }
    };

    const onClick = () => {
        console.log('click')
    }

  return (
    <div className='movie__search'>
        <div className="container">
            <h2>검색하기</h2>
            <input ref={inputRef} type="search" placeholder='원하시는 영화를 검색해주세요!' onKeyPress={onKeyPress} />
            <button type='submit' onClick={onClick}>검색</button>
        </div>
    </div>
  )
}

export default MovieSearch