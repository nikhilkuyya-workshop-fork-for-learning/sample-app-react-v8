const NoStateSearchParams = () => {
  const location = "test";
  // to test thre renders
  console.log("hi, nostate searchParms");
  return (
    <div>
      <form>
        <fieldset>
          <legend>My Render Test</legend>
          <label htmlFor="location">
            <input
              id="location"
              placeholder="Enter Location"
              defaultValue={location}
            />
          </label>
          <label htmlFor="valuelocation">
            <input
              id="valuelocation"
              placeholder="Enter Location"
              value={location}
            />
          </label>
        </fieldset>
      </form>
    </div>
  );
};

export default NoStateSearchParams;
