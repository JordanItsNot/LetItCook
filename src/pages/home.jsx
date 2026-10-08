import { useState } from "react";
import Counter from "../components/Counter";
import CounterWithProp from "../components/CounterWithProp";
import recipes from "../data/recipes.json"

export default function HomePage() {

    let [searchStr, setSearchStr] = useState("");
    let [selectedRecipeIndex, setSelectedRecipeIndex] = useState(null)


    function iconify(name) {
        switch (name.toLocaleLowerCase()) {
            case "milk":
                return "🥛 Milk";
            case "egg":
                return "🥚 Egg"
            default:
                return name;
        }
    }

    return (
        <div>
            <div class="grid">
                <div class="flexleft">
                    <div class="title">LET IT COOK</div>
                    <input type="text" placeholder="Search up a recipe!" class="searchbar" onChange={ev => setSearchStr(ev.target.value)} />
                    <div class="resultsbox">
                        <ul class="recipelist">
                            {/* <li class="recipename">- Sugar Cookies</li>
                            <li class="recipename">- Oatmeal Cookies</li>
                            <li class="recipename">- Choc. Chip Cookies</li> */}
                            {recipes.filter(r => r.name.toLocaleLowerCase().includes(searchStr.toLocaleLowerCase())).map(r => (
                                <li class="recipename" onClick={() => setSelectedRecipeIndex(r.id)} style={{
                                    backgroundColor: selectedRecipeIndex == r.id ? "gold" : ""
                                }} >{r.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div class="flexmiddle">
                    <div class="taglist" key={selectedRecipeIndex}>
                        {
                            selectedRecipeIndex && recipes.find(v => v.id === selectedRecipeIndex)?.ingre.map((ing, i) => (
                                <label key={i}>
                                    <input type="checkbox" key={i + ing} id="tag" class="tagclass" defaultChecked={false} />
                                    {iconify(ing)}
                                </label>
                            ))
                        }



                    </div>
                </div>

                <div class="flexright">
                    <div class="recipebox">

                        <div class={selectedRecipeIndex !== "peanutbutt" ? "" : null} id="sugar">
                            <h1 class="header">Sugar Cookies</h1>
                            <p class="bodytext">
                                Ingredients Needed:<br />

                                <p class="bodytext2">
                                    &emsp;- 2 cups white sugar <br />
                                </p>

                                <p class="bodytext2">
                                    &emsp;- 1 ½ cups butter, softened <br />
                                </p>

                                <p class="bodytext2">
                                    &emsp;- 4 large eggs <br />
                                </p>

                                <p class="bodytext2">
                                    &emsp;- 1 teaspoon vanilla extract <br />
                                </p>

                                <p class="bodytext2">
                                    &emsp;- 5 cups all-purpose flour <br />
                                </p>

                                <p class="bodytext2">
                                    &emsp;- 2 teaspoons baking powder <br />
                                </p>

                                <p class="bodytext2">
                                    &emsp;- 1 teaspoon salt <br />
                                </p>

                                Recipe:

                                <p class="bodytext2">
                                    &emsp;1. Gather all ingredients. Beat sugar and softened butter together in a large bowl with an electric mixer until smooth. <br />
                                </p>

                                <p class="bodytext2">
                                    &emsp;2. Beat in eggs and vanilla. Stir in flour, baking powder, and salt. Cover, and chill...<br />
                                </p>
                            </p>
                        </div>

                        <div class={selectedRecipeIndex !== "choc" ? "hidden" : null} id="choc">
                            <h1 class="header">Oatmeal Cookies</h1>
                            <p class="bodytext">
                                Ingredients Needed:<br />

                                <p class="bodytext2">
                                    &emsp;- 2 cups all-purpose flour <br />
                                </p>

                                <p class="bodytext2">
                                    &emsp;- 1 ½ teaspoons ground cinnamon <br />
                                </p>

                                <p class="bodytext2">
                                    &emsp;- 1 teaspoon baking soda <br />
                                </p>

                                <p class="bodytext2">
                                    &emsp;- 1 teaspoon salt <br />
                                </p>

                                <p class="bodytext2">
                                    &emsp;- 1 cup unsalted butter, softened <br />
                                </p>

                                <p class="bodytext2">
                                    &emsp;- 1 cup white sugar <br />
                                </p>

                                <p class="bodytext2">
                                    &emsp;- 1 cup packed brown sugar <br />
                                </p>

                                <p class="bodytext2">
                                    &emsp;- 2 large eggs <br />
                                </p>

                                <p class="bodytext2">
                                    &emsp;- 1 teaspoon vanilla extract <br />
                                </p>

                                <p class="bodytext2">
                                    &emsp;- 3 cups quick-cooking oats <br />
                                </p>

                                <p class="bodytext2">
                                    &emsp;- nonstick cooking spray with flour <br />
                                </p>

                                <p class="bodytext2">
                                    &emsp;- 2 tablespoons water <br />
                                </p>

                                <p class="bodytext2">
                                    &emsp;- 2 tablespoons white sugar, or as... <br />
                                </p>

                            </p>
                        </div>

                        <div class={selectedRecipeIndex !== "wha" ? "hidden" : null} id="wha">
                            <h1 class="header">Chocolate Chip Cookies</h1>
                            <p class="bodytext">
                                Ingredients Needed:<br />

                                <p class="bodytext2">
                                    &emsp;- 1 cup butter, softened<br />
                                </p>

                                <p class="bodytext2">
                                    &emsp;- 1 cup white sugar <br />
                                </p>

                                <p class="bodytext2">
                                    &emsp;- 1 cup packed brown sugar <br />
                                </p>

                                <p class="bodytext2">
                                    &emsp;- 2 large eggs <br />
                                </p>

                                <p class="bodytext2">
                                    &emsp;- 2 teaspoon vanilla extract <br />
                                </p>

                                <p class="bodytext2">
                                    &emsp;- 1 teaspoon baking soda <br />
                                </p>

                                <p class="bodytext2">
                                    &emsp;- 2 teaspoons hot water <br />
                                </p>

                                <p class="bodytext2">
                                    &emsp;- ½ teaspoon salt <br />
                                </p>

                                <p class="bodytext2">
                                    &emsp;- 3 cups all-purpose flour <br />
                                </p>

                                <p class="bodytext2">
                                    &emsp;- 2 cups semi-sweet chocolate chips <br />
                                </p>

                                <p class="bodytext2">
                                    &emsp;- 1 cup chopped walnuts (optional)... <br />
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