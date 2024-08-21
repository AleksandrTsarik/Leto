<template>

    <div v-if="type === 'text'" class="block-input">
        <label>
            <input type="text" :value="value" :placeholder="placeholder"
                   @input="$emit('update:value', $event.target.value)">
            <span v-if="name">{{ name }}</span>
            <span v-if="img" class="block-input__img">
          <svg width="17.000000" height="18.000000" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"
               xmlns:xlink="http://www.w3.org/1999/xlink">
            <desc>
                Created with Pixso.
            </desc>
            <defs/>
            <path id="Vector"
                  d="M16 16.5L12.13 12.63M13.68 10.33C14.03 9.46 14.22 8.54 14.22 7.61C14.22 6.67 14.03 5.75 13.68 4.88C13.32 4.02 12.79 3.24 12.13 2.58C11.47 1.92 10.69 1.39 9.83 1.04C8.96 0.68 8.04 0.5 7.11 0.5C6.17 0.5 5.25 0.68 4.38 1.04C3.52 1.39 2.74 1.92 2.08 2.58C0.74 3.91 0 5.72 0 7.61C0 9.49 0.74 11.3 2.08 12.63C3.41 13.97 5.22 14.72 7.11 14.72C8.99 14.72 10.8 13.97 12.13 12.63C12.79 11.97 13.32 11.19 13.68 10.33Z"
                  stroke="#212529" stroke-opacity="1.000000" stroke-width="1.066654" stroke-linejoin="round"/>
          </svg>
        </span>
        </label>
    </div>
    <div v-else-if="type === 'tel'" class="block-input">
        <label>
            <input :value="value" @input="$emit('update:value', $event.target.value)" type="tel" :placeholder="placeholder">
            <!--        <MaskInput type="tel"  v-model="phoneNumber" mask="+7(###) ###-##-##" placeholder="+7 (-&#45;&#45;) -&#45;&#45; &#45;&#45; &#45;&#45;" />-->
            <span v-if="name">{{ name }}</span>
        </label>
    </div>
    <div v-else-if="type === 'email'" class="block-input">
        <label>
            <input :value="value" type="email" :placeholder="placeholder"
                   @input="$emit('update:value', $event.target.value)">
            <span v-if="name">{{ name }}</span>
        </label>
    </div>
    <div v-else-if="type === 'file'" class="block-input__file">
        <label>
            <input :value="value" type="file" :placeholder="fileName" @change="uploadFile($event.target.files)" multiple>
            <span v-if="fileName">{{ fileName }}</span>
            <span class="block-input__file-ico">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title/><path
                        d="M9,21.5A7,7,0,0,1,4.05,9.59L9.7,4a5,5,0,0,1,7.06,0,5,5,0,0,1,0,7.05l-5.65,5.63a3,3,0,0,1-4.23,0A3,3,0,0,1,6,14.53a3,3,0,0,1,.87-2.12l5.65-5.63a1,1,0,0,1,1.42,0,1,1,0,0,1,0,1.41L8.29,13.82a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l5.65-5.64a3,3,0,0,0,0-4.21,3,3,0,0,0-4.24,0L5.46,11a5,5,0,0,0,0,7,5,5,0,0,0,7.06,0l7.77-7.74a1,1,0,0,1,1.42,0,1,1,0,0,1,0,1.41l-7.77,7.75A7,7,0,0,1,9,21.5Z"
                        fill="#464646"/>
                </svg>
            </span>
        </label>
    </div>
    <div v-else-if="type === 'textarea'" class="block-textarea">
        <textarea :placeholder="placeholder" :value="value" @input="$emit('update:value', $event.target.value)"></textarea>
    </div>
</template>

<script>
// import { MaskInput } from 'vue-3-mask';
export default {
    components: {
        // MaskInput
    },
    emits: ["update:value", "selectFile"],
    props: {
        value: {
            type: [String, Number],
            default: ''
        },
        label: {
            type: String,
            default: ''
        },
        img: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            defrault: '',
            require: true
        },
        placeholder: {
            type: String,
            default: '',
            require: true
        }
    },
    data() {
        return {
            phoneNumber: '',
            fileName: ''
        }
    },

    mounted() {
        this.fileName = this.name;
    },

    methods: {
        uploadFile(files) {
            files = Array.from(files);
            if (files.length === 0) {
                this.fileName = this.name;
            } else {
                this.fileName = files.map(f => f.name).join(", ");
            }
            this.$emit("selectFile", files);
        }
    },
}
</script>

<style lang="scss">
.block-input {
  width: 100%;
  border: solid 1px #C9C9C9;
  border-radius: 6px;
  font-size: 18px;
  position: relative;
  margin-bottom: 10px;

  input {
    padding: 14px 25px;
    width: 100%;
    text-overflow: ellipsis;
  }

  &__file-ico {
    margin: 0 1em;

    svg {
      width: 20px;
    }
  }

  &__file {
    position: relative;
    height: 50px;
    margin-top: 10px;

    label {
      cursor: pointer;
      display: flex;
      width: 100%;
      padding: 1em;
      border: solid 1px #C9C9C9;
      border-radius: 6px;
    }

    input {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      opacity: 0;
    }
  }

  &__img {
    position: absolute;
    right: 20px;
    top: 60%;
    transform: translateY(-50%);
  }
}

.block-textarea {
  textarea {
    resize: none;
    width: 100%;
    border: solid 1px #C1C1C1;
    border-radius: 10px;
    padding: 15px 25px;
    background-color: transparent;
  }
}
</style>