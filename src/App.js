import Product from './components/Product'
import { ProductProvider } from './context/ProductContext';
import { ModeProvider } from './context/ModeContext';
import './App.css';
//ModeProvider tracks and changes light/dark mode

function App() {
  return (
    <>
      <h1>Assignment</h1>
    <h2>Brief</h2>
    <h3>Task 1 - Adding Edit UI element</h3>
    <h3 className="done">Added a height to the container so when you toggle to dark mode, the color goes further down.</h3>
    <h3 className="done">There was css that was commented out that colors the white rows when in dark mode. </h3>
    
    <p>The <strong>Update</strong> part of the app is more complex as it requires a few functional steps:</p>
    
    <ol>
      <li>Click on an EDIT button to select the item</li>
      <li>Show values in a form for editing</li>
      <li>Submit the form to update the item in the list</li>
    </ol>

    <p>The steps are broken down into three helper functions in Product.js:<br></br>
    <br></br>
    HandlerEditForm --> HandlerUpdateForm --> HandlerSubmitForm<br></br>
    <br></br>
    First, add the Edit button and prop handler to ViewList.js: The following elements also needs to create:</p>
    <ol>
      <li>A button to show the edit form for each item</li>
      <li>An edit form with the fields for the name, quantity, price, and discount</li>
      <li>Two buttons in the form to submit the changes and to cancel the editing</li>
    </ol>

    <h2>Optional Assignments</h2>
    <h3 className="done">DONE: Task 1</h3>
    
    <p>A user can press the 'Delete' button while editing the same item, which can cause the list to be updated incorrectly when the form is submitted. Modify the code to prevent the user from deleting am item while it is being edited.<br></br>
    
    Hint: Use the isEditing flag to check if user is in edit mode</p>
    
    <h3>Task 2 (Challenging)</h3>

    <p>Refactor Product.js to split the editing form into a separate component, e.g. EditForm.js. You may use props to share data between the parent and new child component.</p>
    
    <p><strong>Submission</strong><br></br>
    Submit the URL of the GitHub Repository that contains your work.</p>

<div className="App">
       <ModeProvider>  {/* Sets the light/dark mode  */}
        <ProductProvider>
          <Product />
        </ProductProvider>
      </ModeProvider>
    </div>     
    </>  
  );
}


export default App;
