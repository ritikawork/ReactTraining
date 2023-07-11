import React, {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?query=";

const list = [
  {
    objectID: 1,
    title: "React",
    author: "Facebook",
    url: "http://react.dev",
  },
  {
    objectID: 2,
    title: "ios",
    author: "Apple",
    url: "http://apple.com",
  },
  {
    objectID: 3,
    title: "Android",
    author: "Google",
    url: "http://google.com",
  },
  {
    objectID: 4,
    title: "Xamarin",
    author: "Microsoft",
    url: "http://apple.com",
  },
  {
    objectID: 5,
    title: "Flutter",
    author: "Google",
    url: "http://google.com",
  },
];
//Arrow function
//Props
export default function ListComponent() {
  //const [searchedTechnologies, setSearchedTechnologies] = useState([]);
  //const [isLoading, setIsLoading] = useState(false);
  //const [isError, setIsError] = useState(false);

  const technologiesReducer = (state, action) => {
    switch (action.type) {
      case "TECHNOLOGIES_FETCH_INIT":
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case "TECHNOLOGIES_FETCH_SUCCESS":
        return {
          ...state,
          isLoading: false,
          isError: false,
          data: action.payload,
        };
      case "TECHNOLOGIES_FETCH_FAILURE":
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case "SET_TECHNOLOGIES":
        return action.payload;
      case "REMOVE_TECHNOLOGY":
        return {
          ...state,
          data: state.data.filter(
            (technology) => action.payload.objectId !== technology.objectId
          ), //setting or updating the searchedTechnologies state
        };
      default:
        //setIsError(true);
        throw new Error();
    }
  };

  const [technologies, dispatchTechnologies] = useReducer(technologiesReducer, {
    data: [],
    isLoading: false,
    isError: false,
  });

  const getAsyncTechnologies = () => {
    return new Promise((resolve) =>
      setTimeout(() => resolve({ data: { technologies: list } }), 2000)
    );
  };

  //use keyword for hooks - naming convention
  //Custom Hooks
  //Hook use
  //useEffect, useState Hooks
  const useSemiPersistantState = () => {
    const [searchTerm, setSearchTerm] = useState(
      localStorage.getItem("search") || "React"
    );
    //useState
    //useEffect
    useEffect(() => {
      localStorage.setItem("search", searchTerm);
    }, [searchTerm]);

    return [searchTerm, setSearchTerm];
  };

  const [searchTerm, setSearchTerm] = useSemiPersistantState();
  const [url, setUrl] = useState(`${API_ENDPOINT}${searchTerm}`);

  const handleFetchStories = useCallback(() => {
    if (!searchTerm) return;

    dispatchTechnologies({ type: "TECHNOLOGIES_FETCH_INIT" });

    fetch(url)
      .then((response) => response.json())
      .then((result) =>
        dispatchTechnologies({
          type: "TECHNOLOGIES_FETCH_SUCCESS",
          payload: result.hits,
        })
      )
      .catch(() =>
        dispatchTechnologies({ type: "TECHNOLOGIES_FETCH_FAILURE" })
      );
  }, [url]);

  useEffect(() => {
    handleFetchStories();
    // getAsyncTechnologies()
    //   .then(
    //     result => {
    //       dispatchTechnologies({
    //         type: 'TECHNOLOGIES_FETCH_SUCCESS',
    //         payload: result.data.technologies
    //       });
    //     //setSearchedTechnologies(result.data.technologies);
    //     })
    //   .catch(() => dispatchTechnologies({ type: 'TECHNOLOGIES_FETCH_FAILURE'}));
  }, [handleFetchStories]);

  //Hooks react/reactnative
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedTechnologies = technologies.data.filter((technology) =>
    technology.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //let searchedTechnologies = [];
  const handleButtonClick = (event) => {
    setUrl(`${API_ENDPOINT}${searchTerm}`);

    //alert(handleButtonClick);
    // //setSearchTerm(event.target.value);
    // console.log("handleButtonClick");
    // const filteredList = list.filter(function (technology) {
    //   return technology.title.toLowerCase().includes(searchTerm.toLowerCase());
    // });
    // console.log(technologies);
    // //localStorage.setItem('search', event.target.value);
    // //setSearchedTechnologies(filteredList);
    // dispatchTechnologies({
    //   type: "SET_TECHNOLOGIES",
    //   payload: filteredList,
    // });
  };

  const handleRemove = (item) => {
    //const newTechnologies = searchedTechnologies.filter(technology => item.objectId !== technology.objectId);
    //setSearchedTechnologies(newTechnologies);
    dispatchTechnologies({
      type: "REMOVE_TECHNOLOGY",
      payload: item,
    });
  };

  return (
    //React Fragment
    <>
      <h1> Technologies</h1>
      {/* <Search search={searchTerm} onSearch={handleChange} onSubmit={handleButtonClick} />  */}
      {/* {search, onSearch, onSubmit} */}
      <InputWithLabel
        id="search"
        label="Search"
        value={searchTerm}
        isFocused
        onInputChange={handleChange}
        onSubmit={handleButtonClick}
      />
      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
      {technologies.isError && <p> Something went wrong </p>}

      {technologies.isLoading ? (
        <p> Loading...</p>
      ) : (
        <List technologies={technologies.data} onRemoveItem={handleRemove} />
      )}
    </>
  );
}

{
  /* <List technologies={searchedTechnologies} onRemoveItem={handleRemove} />; */
}

//useRef
const InputWithLabel = ({
  id,
  label,
  value,
  type = "text",
  isFocused,
  onInputChange,
  onSubmit,
}) => {
  const inputRef = useRef();

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <>
      <label htmlFor={id}>{label}</label>
      &nbsp;
      <input
        ref={inputRef}
        id={id}
        type={type}
        value={value}
        onChange={onInputChange}
        // autoFocus={isFocused}
      />
      <button title="Search" onClick={onSubmit}>
        Search
      </button>
    </>
  );
};

const Search = ({ search, onSearch, onSubmit }) => {
  //const {search, onSearch, onSubmit} = props;
  return (
    //React Fragment
    <>
      <label> Search:</label>
      <input id="search" type="text" value={search} onChange={onSearch} />
      <button title="Search" onClick={onSubmit}>
        Search
      </button>
    </>
  );
};

// const profile = {
//   firstname: 'Robin',
//   lastname: 'Wierch',
// }

// const address = {
//   country: 'German',
//   city: 'Berlin',
//   code:'10439'
// }

// const user = {
//   ...profile,
//   gender: 'male',
//   ...address
// }
// //rest operator
// const { firstname, lastname, ...userValues } = user;
//Spread Operator
// objectId={item.objectId}
// website={item.website}
// title={item.title}
// foundedBy={item.foundedBy}
const List = ({ technologies, onRemoveItem }) =>
  technologies.map((item) => (
    <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
  ));

const Item = ({ item, onRemoveItem }) => {
  return (
    <div key={item.objectID}>
      <span>
        <a href={item.url}> {item.title} </a>
      </span>
      <span> {item.author} </span>
      <span>
        <button
          type="button"
          onClick={() => {
            onRemoveItem(item);
          }}
        >
          Dismiss
        </button>
      </span>
    </div>
  );
};
//State
