import imageOmelette from './assets/images/image-omelette.jpeg'

export default function Recipe() {
    return (
        <>
            <div class="  flex items-center justify-center p-8 text-[16px]">
                <div class="max-w-lg  overflow-hidden">

                    <img
                        src={imageOmelette}
                        alt="Omelette Recipe"
                        className="rounded-md"
                    />

                    <div class="py-6">

                        <h1 class="text-3xl font-bold font-outfit">Simple Omelette Recipe</h1>

                        <p class="text-gray-600 mt-2">
                            An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked
                            to perfection, optionally filled with your choice of cheese, vegetables, or meats.
                        </p>

                        <div class="bg-pink-50 p-6 mt-4 rounded-lg">
                            <h2 class="text-lg font-semibold font-outfit text-[hsl(332,51%,32%)]">Preparation time</h2>
                            <ul class="mt-1 text-sm  pl-5">
                                <li><span className='text-[hsl(14,45%,36%)] pr-6 text-3xl  font-semibold'>.</span><strong>Total:</strong> Approximately 10 minutes</li>
                                <li><span className='text-[hsl(14,45%,36%)] pr-6 text-3xl  font-semibold'>.</span><strong>Preparation:</strong> 5 minutes</li>
                                <li><span className='text-[hsl(14,45%,36%)] pr-6 text-3xl  font-semibold'>.</span><strong>Cooking:</strong> 5 minutes</li>
                            </ul>
                        </div>

                        <div class="mt-6">
                            <h2 class=" font-semibold text-[hsl(14,45%,36%)] font-outfit text-3xl">Ingredients</h2>
                            <ul class="mt-2 text-sm  pl-5">
                                <li ><span className='text-[hsl(14,45%,36%)] pr-6 text-3xl  font-semibold'>.</span>2-3 large eggs</li>
                                <li ><span className='text-[hsl(14,45%,36%)] pr-6 text-3xl  font-semibold'>.</span>Salt, to taste</li>
                                <li ><span className='text-[hsl(14,45%,36%)] pr-6 text-3xl  font-semibold'>.</span>Pepper, to taste</li>
                                <li ><span className='text-[hsl(14,45%,36%)] pr-6 text-3xl  font-semibold'>.</span>1 tablespoon of butter or oil</li>
                                <li ><span className='text-[hsl(14,45%,36%)] pr-6 text-3xl  font-semibold'>.</span>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
                            </ul>
                        </div>

                        <div class="mt-6 border-b pb-5">
                            <h2 class=" font-semibold  text-[hsl(14,45%,36%)] font-outfit text-3xl">Instructions</h2>
                            <ol class="mt-2  text-sm text-gray-700  pl-5 space-y-2 text-[16px]">
                                <li >
                                <span className='text-[hsl(14,45%,36%)] pr-5 text-md  font-semibold'>1.</span><strong>Beat the eggs:</strong> In a bowl, beat the eggs with a pinch of salt and pepper
                                    until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.
                                </li>
                                <li>
                                <span className='text-[hsl(14,45%,36%)] pr-5 text-md  font-semibold'>2.</span> <strong>Heat the pan:</strong> Place a non-stick frying pan over medium heat and add butter or oil.
                                </li>
                                <li>
                                <span className='text-[hsl(14,45%,36%)] pr-5 text-md  font-semibold'>3.</span>  <strong>Cook the omelette:</strong> Once the butter is melted and bubbling, pour in the eggs. Tilt the
                                    pan to ensure the eggs evenly coat the surface.
                                </li>
                                <li>
                                <span className='text-[hsl(14,45%,36%)] pr-5 text-md  font-semibold'>4.</span> <strong>Add fillings (optional):</strong> When the eggs begin to set at the edges but are still
                                    slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.
                                </li>
                                <li>
                                <span className='text-[hsl(14,45%,36%)] pr-5 text-md  font-semibold'>5.</span> <strong>Fold and serve:</strong> As the omelette continues to cook, carefully lift one edge and fold it
                                    over the fillings. Let it cook for another minute, then slide it onto a plate.
                                </li>
                                <li>
                                <span className='text-[hsl(14,45%,36%)] pr-5 text-md  font-semibold'>6.</span> <strong>Enjoy:</strong> Serve hot, with additional salt and pepper if needed.
                                </li>
                            </ol>
                        </div>

                        <div class="mt-6  p-4 rounded-lg ">
                            <h2 class=" font-semibold text-[hsl(14,45%,36%)] font-outfit text-3xl">Nutrition</h2>
                            <p class="text-sm text-gray-700 mt-2">
                                The table below shows nutritional values per serving without the additional fillings.
                            </p>
                            <table class="mt-2 w-full text-[16px] text-gray-700 border-separate  border-spacing-y-2">
                                <tr >
                                    <td>Calories</td>
                                    <td className='text-[hsl(14,45%,36%)] font-semibold'>277 kcal</td>
                                </tr>
                                <tr>
                                    <td>Carbs</td>
                                    <td className='text-[hsl(14,45%,36%)] font-semibold'>0g</td>
                                </tr>
                                <tr>
                                    <td>Protein</td>
                                    <td className='text-[hsl(14,45%,36%)] font-semibold'>20g</td>
                                </tr>
                                <tr>
                                    <td>Fat</td>
                                    <td className='text-[hsl(14,45%,36%)] font-semibold'>22g</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}