const list1 = [
  {
    objectId: 1,
    title: "React",
    foundedBy: "Facebook",
    website: "http://react.dev",
  },
  {
    objectId: 2,
    title: "iOS",
    foundedBy: "Apple",
    website: "http://apple.com",
  },
  {
    objectId: 3,
    title: "Android",
    foundedBy: "Google",
    website: "http://google.com",
  },
];

export default function ListComponent() {
  return (
    <div>
      <h1> Technologies </h1>
      {/* <ul>
        {
        list1.map(item => {
            return <div>
                 <p>Item{item.objectId}</p>
                 <li>
              <div>
             <span> 
            <a href={item.website}> {item.title}</a> 
                  </span>
                 <span>{item.foundedBy}</span> 
                 <div>
                 <hr style = {{backgroundColor :'red',height:1}}></hr>
                 </div>
               </div>
            </li> 
            </div>
        })
    }
            </ul> */}
      {list1.map((item) => {
        return (
          <div key={item.objectId}>
            <span>
              <a href={item.website}> {item.title}</a>
            </span>
            <span>{item.foundedBy}</span>
          </div>
        );
      })}
    </div>
  );
}
