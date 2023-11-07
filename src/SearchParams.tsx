import { ChangeEvent, useState } from "react";

const SearchParams = () => {
  const [location,setLocation] = useState("");
  const onChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => setLocation(evt.target.value);
  return (
    <div>
    <form>
    <label htmlFor="location">
    <input id="location" value={location} onChange={onChangeHandler}
    placeholder="Enter Location" />
    </label>
    </form>
    </div>
  );
}

export default SearchParams;
