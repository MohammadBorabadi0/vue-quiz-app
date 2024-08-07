<script setup lang="ts">
import Question from "@/components/Question.vue";
import QuestionHeader from "@/components/QuestionHeader.vue";
import q from "@/data/data.json";
import { IQuiz } from "@/utils/type";
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import ResultView from "./ResultView.vue";
const route = useRoute();

const quizId = route.params.id;
const quiz = ref<IQuiz | undefined>(undefined);
const currentQuestion = ref(0);
const numberOfCurrentAnswers = ref(0);
const showResult = ref(false);

onMounted(() => (quiz.value = q.find((quiz) => quiz.id === +quizId)));

const questionStatus = computed(
  () => `${currentQuestion.value} / ${quiz.value?.questions.length}`
);

const barPercent = computed(
  () =>
    quiz.value &&
    `${(currentQuestion.value / quiz.value?.questions.length) * 100}%`
);

const handleOptionSelected = (option: boolean) => {
  if (option) {
    numberOfCurrentAnswers.value++;
  }
  currentQuestion.value++;
};

watch(currentQuestion, (newVal) => {
  if (quiz.value && newVal === quiz.value.questions.length) {
    showResult.value = true;
  }
});
</script>

<template>
  <div v-if="quiz" class="space-y-3">
    <ResultView
      v-if="showResult"
      :number-of-current-answers="numberOfCurrentAnswers"
      :questions="quiz.questions"
    />
    <div v-else>
      <QuestionHeader
        :questionStatus="questionStatus"
        :barPercent="barPercent"
      />
      <Question
        :question="quiz.questions[currentQuestion]"
        @optionSelected="handleOptionSelected"
      />
    </div>
  </div>
</template>
