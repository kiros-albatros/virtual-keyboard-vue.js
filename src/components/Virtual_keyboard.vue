<template>
    <h1>{{ title }}</h1>
    <h2>lang ru: {{ this.$store.state.ru }}</h2>
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
            //  isActive: false,
        };
    },

    created() {
        document.addEventListener("keydown", (event) =>
            this.keyDownHandler(event)
        );
        document.addEventListener("keyup", () => this.keyUpHandler());
    },

    props: {
        engKeys: Object,
        ruKeys: Object,
        title: String,
    },
    methods: {
        //при нажатии мышкой - начало
        switchCases(variable, event) {
            console.log('switchCases works');
            console.log(variable);
             console.log(event);
            switch (variable) {
                case "Space":
                    if (variable === event.code) {
                        event.preventDefault();
                    }
                    this.textarea += " ";
                    break;
                case "Backspace":
                case "Delete":
                    this.textarea = this.textarea.slice(0, -1);
                    break;
                case "Enter":
                    this.textarea += "\n";
                    break;
                case "Tab":
                    this.textarea += "\t";
                    break;
                case "ControlRight":
                case "ControlLeft":
                case "AltRight":
                case "AltLeft":
                case "ShiftLeft":
                case "ShiftRight":
                    this.textarea = this.textarea;
                    break;
                case "CapsLock":
                    this.$store.commit("changeCapsLock");
                    break;
                default:
                    if (variable === event.code) {
                        if (this.$store.state.CapsLock) {
                            this.textarea += event.key.toUpperCase();
                        } else {
                            this.textarea += event.key.toLowerCase();
                        }
                    } else {
                        if (this.$store.state.CapsLock) {
                            this.textarea += key.value.toUpperCase();
                        } else {
                            this.textarea += key.value.toLowerCase();
                        }
                    }
                    return this.textarea;
            }
        },

        mouseDownHandler(key) {
            const el = document.getElementById(key.id);
            el.classList.add("press");

            // switch (key.name) {
            //     case "Space":
            //         this.textarea += " ";
            //         break;
            //     case "Backspace":
            //     case "Delete":
            //         this.textarea = this.textarea.slice(0, -1);
            //         break;
            //     case "Enter":
            //         this.textarea += "\n";
            //         break;
            //     case "Tab":
            //         this.textarea += "\t";
            //         break;
            //     case "ControlRight":
            //     case "ControlLeft":
            //     case "AltRight":
            //     case "AltLeft":
            //     case "ShiftLeft":
            //     case "ShiftRight":
            //         this.textarea = this.textarea;
            //         break;
            //     case "CapsLock":
            //         this.$store.commit("changeCapsLock");
            //         break;
            //     default:
            //         if (this.$store.state.CapsLock) {
            //             this.textarea += key.value.toUpperCase();
            //         } else {
            //             this.textarea += key.value.toLowerCase();
            //         }
            //         break;
            // }
            this.switchCases(key, event);
            return this.textarea;
        },

        mouseUpHandler(key) {
            const el = document.getElementById(key.id);
            el.classList.remove("press");
        },

        //при нажатии мышкой - конец

        // перерисовка клавиш из-за смены языка

        setLang() {
            console.log("CHANGE LANG");
            this.$store.commit("changeLang");
            if (this.$store.state.ru === true) {
                this.currentKeys = this.ruKeys;
            } else {
                this.currentKeys = this.engKeys;
            }
        },

        //при нажатии клавиш - начало

        keyDownHandler(event) {
            this.$store.commit("addPressedButtons", event.code);

            // проверка переключения языка
            if (this.$store.state.pressedButtons.length === 2) {
                if (event.altKey && event.shiftKey) {
                    if (
                        this.$store.state.pressedButtons.includes(
                            "ShiftLeft"
                        ) &&
                        this.$store.state.pressedButtons.includes("AltLeft")
                    ) {
                        this.setLang();
                    } else {
                        return;
                    }
                } else if (event.shiftKey) {
                    if (
                        this.$store.state.pressedButtons[1] !==
                        ("ShiftLeft" || "ShiftRight" || "AltLeft")
                    ) {
                        this.currentKeys.map((currentKey) => {
                            if (
                                currentKey.name ===
                                this.$store.state.pressedButtons[1]
                            ) {
                                let letter = currentKey.value;
                                return (this.textarea += letter.toUpperCase());
                            }
                        });
                    }
                }
            } else if (this.$store.state.pressedButtons.length === 1) {
                switch (event.code) {
                    case "Space":
                        event.preventDefault();
                        this.textarea += " ";
                        break;
                    case "Backspace":
                    case "Delete":
                        this.textarea = this.textarea.slice(0, -1);
                        break;
                    case "Enter":
                        this.textarea += "\n";
                        break;
                    case "Tab":
                        this.textarea += "\t";
                        break;
                    case "ControlRight":
                    case "ControlLeft":
                    case "AltRight":
                    case "AltLeft":
                    case "ShiftRight":
                    case "ShiftLeft":
                        this.textarea = this.textarea;
                        break;
                    case "CapsLock":
                        this.$store.commit("changeCapsLock");
                        break;
                    default:
                        if (this.$store.state.CapsLock) {
                            return (this.textarea += event.key.toUpperCase());
                        } else {
                            return (this.textarea += event.key.toLowerCase());
                        }
                }
            }

            return this.textarea;
        },

        //     localStorage["rus"] = "true";
        //     let russ = localStorage.getItem("rus");
        //   } else {
        //     ru = false;
        //     currentKeys = engKeys;
        //     printChars();

        //     localStorage["rus"] = "false";
        //     let russ = localStorage.getItem("rus");
        //   }

        keyUpHandler() {
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
