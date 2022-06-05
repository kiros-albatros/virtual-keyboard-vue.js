<template>
    <h1>{{ title }}</h1>
    <textarea :key="textarea" class="textarea">{{ textarea }}</textarea>
    <ul class="keyboard">
        <li
            v-for="key in currentKeys"
            :id="key.id"
            :key="key.id"
            :data-key="key.key"
            :class="key.class"
            @mousedown="() => mouseDownHandler(key)"
            @mouseup="() => mouseUpHandler(key)"
        >
            {{ key.value }}
        </li>
    </ul>
</template>

<script>
export default {
    name: "Virtual_keyboard",
    data() {
        return {
            textarea: "",
            currentKeys: this.engKeys,
            isActive: false,
        };
    },

    created() {
        window.addEventListener("keydown", (event) =>
            this.keyDownHandler(event)
        );
        window.addEventListener("keyup", (event) => this.keyUpHandler(event));
    },

    props: {
        engKeys: Object,
        ruKeys: Object,
        title: String,
    },
    methods: {
        //при нажатии мышкой начало
        mouseDownHandler(key) {
            const el = document.getElementById(key.id);
            el.classList.add("press");

            if (key.name == "Space") {
                this.textarea += " ";
            } else if (key.name == "Backspace" || key.name == "Delete") {
                this.textarea = this.textarea.slice(0, -1);
            } else if (key.name == "Enter") {
                this.textarea += "\n";
            } else if (key.name == "Tab") {
                this.textarea += "\t";
            } else if (
                key.name == "ControlRight" ||
                key.name == "ControlLeft" ||
                key.name == "AltRight" ||
                key.name == "AltLeft" ||
                key.name == "ShiftLeft" ||
                key.name == "ShiftRight"
            ) {
                this.textarea = this.textarea;
            } else if (key.name == "CapsLock") {
                this.$store.commit("changeCapsLock");
            } else {
                if (this.$store.state.CapsLock) {
                    this.textarea += key.value.toUpperCase();
                } else {
                    this.textarea += key.value.toLowerCase();
                }
            }
            return this.textarea;
        },

        mouseUpHandler(key) {
            const el = document.getElementById(key.id);
            el.classList.remove("press");
        },

        //при нажатии мышкой конец


         setLang() {
            if (this.$store.state.ru) {
                this.currentKeys = this.ruKeys;
            } else {
                this.currentKeys = this.engKeys;
            }
        },

        //при нажатии клавиш - начало

        keyDownHandler(event) {
            console.log("fuck", event.code);

            this.$store.commit("addPressedButtons", event.code);

            //  проверяем на смену языка - начало

            if (
                event.code === "ShiftLeft" &&
                this.$store.state.pressedButtons[0] === "AltLeft"
            ) {
                console.log("CHANGE LANG");
                this.$store.commit("changeLang");
                this.setLang();
                return
            } 
            if (
                event.code === "AltLeft" &&
                this.$store.state.pressedButtons[0] === "ShiftLeft"
            ) {
                console.log("CHANGE LANG");
                this.$store.commit("changeLang");
                this.setLang();
                return
            }

              //  проверяем на смену языка - конец

            if (event.code == "CapsLock") {
                this.$store.commit("changeCapsLock");
                return
            }

            if (event.code == "Backspace" || event.code == "Delete") {
                this.textarea = this.textarea.slice(0, -1);
            } else if (event.code == "Enter") {
                this.textarea += "\n";
            } else if (event.code == "Tab") {
                this.textarea += "    ";
            } else if (event.code == "Space") {
                this.textarea += " ";
            }

            if (this.$store.state.CapsLock && event.code !== "CapsLock") {
                this.currentKeys.map((currentKey) => {
                    if (currentKey.name === event.code) {
                        console.log(currentKey.value);
                        return (this.textarea +=
                            currentKey.value.toUpperCase());
                    }
                });
            }

           
            //     localStorage["rus"] = "true";
            //     let russ = localStorage.getItem("rus");
            //   } else {
            //     ru = false;
            //     currentKeys = engKeys;
            //     printChars();

            //     localStorage["rus"] = "false";
            //     let russ = localStorage.getItem("rus");
            //   }
       
            return
        },

        // } else if (
        //   event.code == "ControlRight" ||
        //   event.code == "ControlLeft" ||
        //   event.code == "AltRight" ||
        //   event.code == "AltLeft"
        // ) {
        //   textarea.innerHTML = textarea.innerHTML;
        // } else {
        //   if (shiftOn !== true && CapsLock !== true) {
        //     this.textarea += currentKeys[event.code].toLowerCase();
        //   } else {
        //     this.textarea += currentKeys[event.code].toUpperCase();
        //   }
        //   shiftOn = false;
        // }
        // },

        keyUpHandler(event) {
            console.log("keyup");
            this.$store.commit("cleanPressedButtons");
        },
    },
};
</script>

<style scoped>
textarea {
    width: 900px;
    border: 2px solid black;
    padding: 10px;
    margin-left: 15px;
    margin-bottom: 20px;
}

.keyboard {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    width: 1030px;
    padding: 10px;
    list-style: none;
}

.key {
    width: 50px;
    height: 35px;
    border: 2px solid black;
    margin: 3px;
    padding: 3px;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    background-color: gray;
    text-align: center;
    padding-top: 15px;
}

.key:hover {
    cursor: pointer;
}

.double {
    width: 100px;
    background-color: darkgray;
}

.space-button {
    width: 265px;
}

.press {
    background-color: rgb(255, 196, 0);
    transition: background-color 0.5s ease-out;
}
</style>
