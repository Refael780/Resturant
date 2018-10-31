import { ingrediant } from "../shere/ingrediant.model";

export class ShoppingListService
{
   private ingrediants:ingrediant[]=
   [
        new ingrediant('apple','5'),
        new ingrediant('cheeze','5')
    ];

    getIngrediants()
    {
        return this.ingrediants.slice();

    }

    addIngrediant(ingrediant:ingrediant)
    {
        this.ingrediants.push(ingrediant);
    }
}