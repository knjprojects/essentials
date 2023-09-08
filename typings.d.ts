export type Item={
    type:string
    price:number
    name: string
    slug:string
    image: string
    cat: string
    description:string
}
export type Dish = {
    type:string
    price:number
    name: string
    slug:string
    image: string
    cat: string
    description:string

}
export type FirebaseStorageImage={
    downloadUrl:string,
    metadata:any
}