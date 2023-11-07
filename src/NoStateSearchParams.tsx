const NoStateSearchParams = () => {
  const location = 'test';
  // to test thre renders
  console.log('hi, nostate searchParms')
  return (
    <div>
    <form>
    <label htmlFor="location">
    <input id="location"  
    placeholder="Enter Location" defaultValue={location} />
    </label>
    </form>
    </div>
  );
}

export default NoStateSearchParams;
