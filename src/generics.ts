// it is templates
function func<T>(item: T): T[] {   // here T can also be a template then return will also be T
    return [item];  
}
// T is template like it could be string, number, boolean or object or array

func(23)
func("hello")
func({})

function pair<A, B>(a:A, b: B): [A, B] {
    return [a, b]  // here [b, a] show error because return type is [A, B]
}
pair(2, 2)
pair<"hello", 21>

//interface can also be generic
interface inter<A> {
    value: A
}
const fir: inter<number> = {value: 23}

interface APIResponse<T>{
    status: number,
    data: T
}
const res: APIResponse<{flavout: string}> = {
    status: 200,
    data: {flavout: "masala"}
}