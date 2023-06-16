# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Tutorial membuat

// 1. Buat ilustrasi kerangka array yang di dalamnya object, dengan key title dan key list. value dari key list berupa array:
// const nestedArray = [
// { title: "pagi", list: ["test", "test", "test"] },
// { title: "pagi", list: ["test", "test", "test"] },
// { title: "pagi", list: ["test", "test", "test"] },
// { title: "pagi", list: ["test", "test", "test"] },
// ]

// 2. Buat state group dengan initial value array kosong, supaya nantinya bisa menambah nestedArray, menghapus nestedArray, dan bisa menambah atau merubah isinya

// 3. Buat variabel baru (newGroup) yang berisi cloningan group. Dicloning karena yang asli tidak dapat dirubah, yang dapat dirubah hanya cloningannya

// 4. map group dengan parameter item dan idx

// 5. >> Buat input add new group , kasih onKeyDown yang isinya function addGroup untuk menambah group baru ke dalam state
// >> Buat funcion addGroup yang akan digunakan untuk menambah group baru ke dalam state, yang isinya:
// .Kasih parameter event (e)
// .Jika event.key sama dengan "Enter", maka push object yang isinya key title dan key lish ke dalam newGroup. key title valuenya event.target.value, sedangkan lish valuenya array kosong
// .Simpan perubahan dalam state menggunakan setstate

// 6. >> Buat button delete Group untuk menghapus group dalam state, kasih onCllick isinya function deleteGroup
// >> Buat funcion deleteGroup yang akan digunakan untuk menghapus group dalam state, isinya:
// .Kasih parameter idx, utk menentukan idx yg dihapus
// .Untuk menghapus gunakan splice method
// .Simpan perubahan dalam state menggunakan setstate

// 7. Akses title menggunakan keynya

// 8. Map lish yang ada di dalam group dengan parameter item dan idx

// #PEMBUATAN ITEM

// 9. >> Buat input add new item, kasih onKeyDown yg isinya function add item
// >> Buat funcion addItem yang akan digunakan untuk menambah item baru yang ada di dalam group, isinya:
// . Kasih parameter event (e) dan idx
// . Jika event.key sama dengan "Enter", maka push valuenya (e.target.value) ke dalam list dari group berdasarkan index yang dikirim. caranya adalah : newGroup[groupIdx].list.push(e.target.value)
// . Simpan perubahan dalam state menggunakan setstate

// 10. >> Buat button del item, kasih onClick yang isinya function delitem.
// >> Buat funcion dell item yang akan digunakan untuk mrnghapus item yang ada di dalam group, yg isinya:
// . Kasih 2 parameter. Parameter pertama adalah idxGroup, paremeter ke dua adalah idxItem
// . di group[idxGroup].list Gunakan splice method untuk menghapus index per Item, jadinya group[idxGroup].list.splice(idxItem, 1)
// . Simpan perubahan dalam state menggunakan setstate

// #MOVE ARRAY

// 11. Install React beautiful dnd. Componen yang disediakan oleh Reat beautiful dnd antara lain : <DragDropContext> , <Droppable>, dan <Draggable>
// 12. Bungkus area yang akan dilakukan drag and drop menggunakan componen <DragDropContext>. Dalam componen <DragDropContext>, kasih onDragEnd yang menerima funcion handleDragEnd. Funcion tersebut akan menghandle event drag and drop yang terjadi pada component <DragDropContext>. Fungsi ini akan dijalankan setiap kali sebuah item selesai di-drag dan drop.
// 13. Buat funcion handleDragEnd yang isinya :
// >> kasih parameter source (asal) dan destination(tujuan)
// >> source dan destination merupakan sebuah object, yang mempunyai 2 key, yaitu: droppableId dan index. value droppableId berupa string dan value index berupa number
// >> karena data yang dibutuhkan adalah number, maka value droppableId harus dirubah menjadi number, caranya dengan menggunakan slice() method, kemudian diparseInt

// 14. Buat funcion moveItemTrello yang isinya :
// >> kasih parameter arr, [idxGroupFrom, idxItemFrom], [idxGroupTo, idxItemTo].
// - arr adalah array yang berisi beberapa grup dan item yang ingin dipindahkan.
// - [idxGroupFrom, idxItemFrom] adalah array yang berisi indeks grup dan indeks item yang ingin dipindahkan dari.
// - [idxGroupTo, idxItemTo] adalah array yang berisi indeks grup dan indeks item yang ingin dipindahkan ke.
// >> Buat variabel sourceArr yang isinya list dari grup yang berisi item yang ingin dipindahkan, yaitu : arr[idxGroupFrom].list;
// >> Buat variabel targetArr yang isinya list dari grup yang ingin menerima item yang dipindahkan, yaitu : arr[idxGroupTo].list;
// >> Buat variabel removedItem untuk menghapus item yang ingin dipindahkan dari sourceArr dengan menggunakan splice method
// >> Item yang sudah dihapus tersebut ditambahkan ke targetArr dengan menggunakan splice method juga.

// 16. masukkan newGroup, source.droppableId + source.index, dan destination.droppableId + destination.index dalam funcion moveItemTrello
// >> [source.droppableId, source.index] artinya: "dari Group sesuai indexnya dan Item sesuai indexnya"
// >> [destination.droppableId, destination.index] artinya: "destinasi sesuai idxGroup dan sesuai idxItem
// >> simpan perubahan dalam state menggunakan setstate
// 17. Gunakan componen <Droppable> dalam group. Dalam componen <Droppable>, kasih droppableId yang isinya {`group ${idx}`} ; yaitu grub berdasarkan indexnhya
// 18. Bungkus componen <div> yang ada di dalam <Droppable> menggunakan funcion dengan paramteter (provided). Funcion ini merupakan bawaan dari react beautiful dnd
// 19. Dalam componen <div> yang dibungkus dengan funcion provided, kasih {...provided.droppableProps} ref={provided.innerRef}
// 20. Bungkus Item yang akan didrag and drop dengan componen <Draggable>. Dalam componen <Draggable>, kasih key={`item ${idx} ${idx2}`} index={idx2} draggableId={`item ${idx} ${idx2}`}
// 21. Bungkus componen <div> yang ada di dalam <Draggable> menggunakan funcion dengan paramteter (provided).
// 22. Dalam componen <div> yang dibungkus dengan funcion provided, kasih ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
