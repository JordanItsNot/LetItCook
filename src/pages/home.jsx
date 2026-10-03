import Counter from "../components/Counter";
import CounterWithProp from "../components/CounterWithProp";

export default function HomePage() {



    return (
        <div>
            <div class = "grid">
            <div class = "flexleft">
                <div class = "title">LET IT COOK</div>
                <input type = "text" placeholder = "Search up a recipe!" class = "searchbar"/>
                <div class = "resultsbox">
                    <ul class = "recipelist">
                        <li class = "recipename">- Sugar Cookies</li>
                        <li class = "recipename">- Oatmeal Cookies</li>
                        <li class = "recipename">- Choc. Chip Cookies</li>
                        
                    </ul>
                </div>
            </div>
            
            <div class = "flexmiddle">
                <div class = "taglist">
                    <label>
                        <input type = "checkbox" id = "tag" class = "tagclass" defaultChecked={true}/>
                        Egg
                    </label>

                    <label>
                        <input type = "checkbox" id = "tag" class = "tagclass" defaultChecked={true}/>
                        Milk
                    </label>

                    <label>
                        <input type = "checkbox" id = "tag" class = "tagclass" defaultChecked={true}/>
                        Salt
                    </label>

                    <label>
                        <input type = "checkbox" id = "tag" class = "tagclass" defaultChecked={true}/>
                        All-Purpose Flour
                    </label>

                    

                    <label>
                        <input type = "checkbox" id = "tag" class = "tagclass" defaultChecked={true}/>
                        White Sugar
                    </label>

                    <label>
                        <input type = "checkbox" id = "tag" class = "tagclass" defaultChecked={true}/>
                        Brown Sugar
                    </label>

                    <label>
                        <input type = "checkbox" id = "tag" class = "tagclass" defaultChecked={true}/>
                        Baking Soda
                    </label>

                    <label>
                        <input type = "checkbox" id = "tag" class = "tagclass" defaultChecked={true}/>
                        Baking Powder
                    </label>

                    <label>
                        <input type = "checkbox" id = "tag" class = "tagclass" defaultChecked={true}/>
                        Vanilla Extract
                    </label>

                    <label>
                        <input type = "checkbox" id = "tag" class = "tagclass" defaultChecked={true}/>
                        Chocolate Chips
                    </label>

                </div>
            </div>

            <div class = "flexright">
                <div class = "recipebox">

                    <div class = "hidden" id = "Recipe1">
                        <h1 class = "header">Sugar Cookies</h1>
                        <p class = "bodytext">
                            Ingredients Needed:<br/>
                            
                            <p class = "bodytext2">
                                &emsp;- 2 cups white sugar <br/>
                            </p>

                            <p class = "bodytext2">
                                &emsp;- 1 ½ cups butter, softened <br/>
                            </p>

                            <p class = "bodytext2">
                                &emsp;- 4 large eggs <br/>
                            </p>
                            
                            <p class = "bodytext2">
                                &emsp;- 1 teaspoon vanilla extract <br/>
                            </p>

                            <p class = "bodytext2">
                                &emsp;- 5 cups all-purpose flour <br/>
                            </p>

                            <p class = "bodytext2">
                                &emsp;- 2 teaspoons baking powder <br/>
                            </p>

                            <p class = "bodytext2">
                                &emsp;- 1 teaspoon salt <br/>
                            </p>

                            Recipe:

                            <p class = "bodytext2">
                                &emsp;1. Gather all ingredients. Beat sugar and softened butter together in a large bowl with an electric mixer until smooth. <br/>
                            </p>

                            <p class = "bodytext2">
                                &emsp;2. Beat in eggs and vanilla. Stir in flour, baking powder, and salt. Cover, and chill...<br/>
                            </p>
                        </p>
                    </div>

                    <div class = "hidden" id = "Recipe2">
                        <h1 class = "header">Oatmeal Cookies</h1>
                        <p class = "bodytext">
                            Ingredients Needed:<br/>
                            
                            <p class = "bodytext2">
                                &emsp;- 2 cups all-purpose flour <br/>
                            </p>

                            <p class = "bodytext2">
                                &emsp;- 1 ½ teaspoons ground cinnamon <br/>
                            </p>

                            <p class = "bodytext2">
                                &emsp;- 1 teaspoon baking soda <br/>
                            </p>
                            
                            <p class = "bodytext2">
                                &emsp;- 1 teaspoon salt <br/>
                            </p>

                            <p class = "bodytext2">
                                &emsp;- 1 cup unsalted butter, softened <br/>
                            </p>

                            <p class = "bodytext2">
                                &emsp;- 1 cup white sugar <br/>
                            </p>

                            <p class = "bodytext2">
                                &emsp;- 1 cup packed brown sugar <br/>
                            </p>

                            <p class = "bodytext2">
                                &emsp;- 2 large eggs <br/>
                            </p>

                            <p class = "bodytext2">
                                &emsp;- 1 teaspoon vanilla extract <br/>
                            </p>

                            <p class = "bodytext2">
                                &emsp;- 3 cups quick-cooking oats <br/>
                            </p>

                            <p class = "bodytext2">
                                &emsp;- nonstick cooking spray with flour <br/>
                            </p>

                            <p class = "bodytext2">
                                &emsp;- 2 tablespoons water <br/>
                            </p>

                            <p class = "bodytext2">
                                &emsp;- 2 tablespoons white sugar, or as... <br/>
                            </p>

                        </p>
                    </div>

                    <div class = "hidden" id = "Recipe3">
                        <h1 class = "header">Chocolate Chip Cookies</h1>
                        <p class = "bodytext">
                            Ingredients Needed:<br/>
                            
                            <p class = "bodytext2">
                                &emsp;- 1 cup butter, softened<br/>
                            </p>

                            <p class = "bodytext2">
                                &emsp;- 1 cup white sugar <br/>
                            </p>

                            <p class = "bodytext2">
                                &emsp;- 1 cup packed brown sugar <br/>
                            </p>

                            <p class = "bodytext2">
                                &emsp;- 2 large eggs <br/>
                            </p>

                            <p class = "bodytext2">
                                &emsp;- 2 teaspoon vanilla extract <br/>
                            </p>

                            <p class = "bodytext2">
                                &emsp;- 1 teaspoon baking soda <br/>
                            </p>
                            
                            <p class = "bodytext2">
                                &emsp;- 2 teaspoons hot water <br/>
                            </p>

                            <p class = "bodytext2">
                                &emsp;- ½ teaspoon salt <br/>
                            </p>

                            <p class = "bodytext2">
                                &emsp;- 3 cups all-purpose flour <br/>
                            </p>

                            <p class = "bodytext2">
                                &emsp;- 2 cups semi-sweet chocolate chips <br/>
                            </p>

                            <p class = "bodytext2">
                                &emsp;- 1 cup chopped walnuts (optional)... <br/>
                            </p>

                            Recipe:...

                        </p>
                    </div>


                </div>
            </div>
            
        </div>
        </div> 
    );
}