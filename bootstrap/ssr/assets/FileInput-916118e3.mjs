import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {
  props: {
    modelValue: File,
    label: String,
    accept: String,
    errors: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:modelValue"],
  watch: {
    modelValue(value) {
      if (!value) {
        this.$refs.file.value = "";
      }
    }
  },
  methods: {
    filesize(size) {
      var i = Math.floor(Math.log(size) / Math.log(1024));
      return (size / Math.pow(1024, i)).toFixed(2) * 1 + " " + ["B", "kB", "MB", "GB", "TB"][i];
    },
    browse() {
      this.$refs.file.click();
    },
    change(e) {
      this.$emit("update:modelValue", e.target.files[0]);
    },
    remove() {
      this.$emit("update:modelValue", null);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  if ($props.label) {
    _push(`<label class="form-label">${ssrInterpolate($props.label)}:</label>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="${ssrRenderClass([{ error: $props.errors.length }, "form-input p-0"])}"><input type="file"${ssrRenderAttr("accept", $props.accept)} class="hidden">`);
  if (!$props.modelValue) {
    _push(`<div class="px-2"><button type="button" class="rounded-sm bg-neutral-500 px-4 py-1 text-xs font-medium text-white hover:bg-neutral-700">${ssrInterpolate(_ctx.__("Browse"))}</button></div>`);
  } else {
    _push(`<div class="flex items-center justify-between p-2"><div class="flex-1 pr-1">${ssrInterpolate($props.modelValue.name)} <span class="text-xs text-neutral-500">(${ssrInterpolate($options.filesize($props.modelValue.size))})</span></div><button type="button" class="rounded-sm bg-neutral-500 px-4 py-1 text-xs font-medium text-white hover:bg-neutral-700">${ssrInterpolate(_ctx.__("Remove"))}</button></div>`);
  }
  _push(`</div>`);
  if ($props.errors.length) {
    _push(`<div class="form-error">${ssrInterpolate($props.errors[0])}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/FileInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FileInput = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  FileInput as F
};
