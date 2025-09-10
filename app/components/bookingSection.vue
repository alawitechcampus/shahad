<script setup>
import { ref, computed } from "vue";

// الحقول
const name = ref("");
const phoneNumber = ref("");
const region = ref("");
const district = ref("");
const date = ref("");
const time = ref(""); // "HH:mm"
const people = ref("");
const isBride = ref(false);

// dialogs
const datePickerDialog = ref(false);
const timePickerDialog = ref(false);

// UI & form
const bookingForm = ref(null);
const isLoading = ref(false);
const snackbar = ref(false);
const snackbarMessage = ref("");
const snackbarColor = ref("red");

// خيارات
const regions = ["مكة", "جدة", "الطائف", "حدة", "الجموم", "الرياض", "المدينة"];
const peopleOptions = Array.from({ length: 15 }, (_, i) => i + 1);

// القواعد
const rules = {
  required: v => !!v || "هذا الحقل مطلوب",
  phone: v => /^05\d{8}$/.test(v) || "رقم التواصل يجب أن يبدأ بـ 05 ويكون 10 أرقام",
};

// التحقق من صحة الفورم
const isFormValid = computed(() => {
  return (
    name.value &&
    phoneNumber.value &&
    /^05\d{8}$/.test(phoneNumber.value) &&
    region.value &&
    district.value &&
    date.value &&
    time.value &&
    people.value
  );
});

// تنسيق الوقت 12 ساعة بالعربي
const formatTimeToArabic12 = t => {
  if (!t) return "";
  const [hours, minutes] = t.split(":").map(Number);
  const period = hours >= 12 ? "م" : "ص";
  const h12 = hours % 12 || 12;
  return `${h12}:${minutes.toString().padStart(2, "0")} ${period}`;
};

// تنسيق التاريخ YYYY/MM/DD
const formatDate = d => {
  if (!d) return "";
  const dt = new Date(d);
  const y = dt.getFullYear();
  const m = (dt.getMonth() + 1).toString().padStart(2, "0");
  const day = dt.getDate().toString().padStart(2, "0");
  return `${y}/${m}/${day}`;
};

// إرسال WhatsApp
const sendToWhatsApp = () => {
  if (!isFormValid.value) {
    snackbarMessage.value = "الرجاء تعبئة جميع الحقول بشكل صحيح";
    snackbarColor.value = "red";
    snackbar.value = true;
    return;
  }

  isLoading.value = true;

  const phone = "966561932041";
  const brideLine = isBride.value ? "\n💍 عروسة" : "";
  const message = `
*طلب حجز موعد جديد* 📅
------------------------
👤 الاسم: ${name.value}
📞 رقم التواصل: ${phoneNumber.value}
📍 المنطقة: ${region.value}
🏠 الحي: ${district.value}
📅 التاريخ: ${formatDate(date.value)}
🕒 الوقت: ${formatTimeToArabic12(time.value)}
👥 عدد الأشخاص: ${people.value}${brideLine}
  `;

  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");

  setTimeout(() => {
    isLoading.value = false;
    snackbarMessage.value = "✅ تم تجهيز الطلب وفتح واتساب";
    snackbarColor.value = "green";
    snackbar.value = true;
  }, 500);
};
</script>

<template lang="pug">
v-container
  v-card(elevation="4" class="pa-3 rounded-xl" color="#ffffffee")
    v-card-title.text-h6.text-center(style="font-family: cairo; font-weight: bold") إحجزي موعد
    v-card-text
      v-form(ref="bookingForm" class="form")
        v-text-field(
          v-model="name"
          label="الاسم"
          prepend-icon="mdi-account"
          :rules="[rules.required]"
          variant="underlined"
        )
        v-text-field(
          v-model="phoneNumber"
          label="رقم التواصل"
          prepend-icon="mdi-phone"
          type="tel"
          :rules="[rules.required, rules.phone]"
          variant="underlined"
        )
        .area.d-flex.gap-2
          v-select(
            v-model="region"
            :items="regions"
            label="المنطقة"
            prepend-icon="mdi-map"
            :rules="[rules.required]"
            variant="underlined"
          )
          v-text-field(
            v-model="district"
            label="الحي"
            prepend-icon="mdi-home"
            :rules="[rules.required]"
            variant="underlined"
          )
        .area.d-flex.gap-2
          v-dialog(v-model="datePickerDialog" width="300")
            template(v-slot:activator="{ props }")
              v-text-field(
                v-model="date"
                label="التاريخ"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="props"
                :rules="[rules.required]"
                variant="underlined"
                :value="formatDate(date)"
              )
            v-date-picker(
              v-model="date"
              @update:model-value="datePickerDialog = false"
            )
          v-dialog(v-model="timePickerDialog" width="300")
            template(v-slot:activator="{ props }")
              v-text-field(
                v-model="time"
                :value="formatTimeToArabic12(time)"
                label="الوقت"
                prepend-icon="mdi-clock"
                readonly
                v-bind="props"
                :rules="[rules.required]"
                variant="underlined"
              )
            v-time-picker(
              v-model="time"
              format="ampm"
              scrollable
              @update:model-value="timePickerDialog = false"
            )
        .area.d-flex.gap-2
          v-select(
            v-model="people"
            :items="peopleOptions"
            label="عدد الأشخاص"
            prepend-icon="mdi-account-multiple"
            :rules="[rules.required]"
            variant="underlined"
          )
          v-checkbox(
            v-model="isBride"
            label="عروسة"
            color="pink"
          )

    v-card-actions.justify-center
      v-btn(
        class="send-button px-6"
        color="primary"
        :loading="isLoading"
        @click="sendToWhatsApp"
        style="font-family: cairo; font-weight: bold"
      ) أرسل الطلب عبر واتساب
        v-icon.right mdi-whatsapp

  v-snackbar(v-model="snackbar" :color="snackbarColor" timeout="3000" location="top")
    | {{ snackbarMessage }}
    template(v-slot:actions)
      v-btn(color="white" variant="text" @click="snackbar = false") إغلاق
</template>

<style lang="scss">
.form {
  font-family: cairo;
  .v-text-field {
    font-size: 14px;
  }
}
.send-button {
  font-weight: bold;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  font-family: cairo;
  &:hover:enabled {
    background-color: rgba(232, 232, 232, 0.776);
    color: #333;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
}
</style>
