// ========================================
// Quiz Application Logic
// ========================================

class QuizApp {
    constructor() {
        // State
        this.allQuestions = quizData;
        this.filteredQuestions = [...quizData];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.answered = false;
        this.selectedCategory = 'all';

        // DOM Elements
        this.quizContainer = document.getElementById('quizContainer');
        this.resultsContainer = document.getElementById('resultsContainer');
        this.questionText = document.getElementById('questionText');
        this.questionCategory = document.getElementById('questionCategory');
        this.optionsContainer = document.getElementById('optionsContainer');
        this.feedback = document.getElementById('feedback');
        this.nextBtn = document.getElementById('nextBtn');
        this.categorySelect = document.getElementById('categorySelect');
        this.questionNumber = document.getElementById('questionNumber');
        this.scoreDisplay = document.getElementById('scoreDisplay');
        this.progressFill = document.getElementById('progressFill');
        this.restartBtn = document.getElementById('restartBtn');

        this.init();
    }

    init() {
        // Populate category dropdown
        this.populateCategories();

        // Event listeners
        this.categorySelect.addEventListener('change', () => this.handleCategoryChange());
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.restartBtn.addEventListener('click', () => this.restartQuiz());

        // Add click listeners to options
        const optionButtons = document.querySelectorAll('.option-btn');
        optionButtons.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleAnswer(e));
        });

        // Load first question
        this.loadQuestion();
    }

    populateCategories() {
        const uniqueCategories = [...new Set(this.allQuestions.map(q => q.category))];

        uniqueCategories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            this.categorySelect.appendChild(option);
        });
    }

    handleCategoryChange() {
        this.selectedCategory = this.categorySelect.value;

        if (this.selectedCategory === 'all') {
            this.filteredQuestions = [...this.allQuestions];
        } else {
            this.filteredQuestions = this.allQuestions.filter(q => q.category === this.selectedCategory);
        }

        // Reset quiz
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.answered = false;
        this.loadQuestion();
    }

    loadQuestion() {
        if (this.currentQuestionIndex >= this.filteredQuestions.length) {
            this.showResults();
            return;
        }

        const question = this.filteredQuestions[this.currentQuestionIndex];

        // Update question text and category
        this.questionText.textContent = question.question;
        this.questionCategory.textContent = question.category;

        // Update options
        const optionButtons = document.querySelectorAll('.option-btn');
        optionButtons.forEach((btn, index) => {
            const optionText = btn.querySelector('.option-text');
            optionText.textContent = question.options[index];

            // Reset button states
            btn.classList.remove('correct', 'incorrect', 'disabled');
            btn.disabled = false;
        });

        // Hide feedback
        this.feedback.classList.remove('show', 'correct', 'incorrect');
        this.feedback.textContent = '';

        // Disable next button
        this.nextBtn.disabled = true;
        this.answered = false;

        // Update progress
        this.updateProgress();
    }

    handleAnswer(e) {
        if (this.answered) return;

        const selectedBtn = e.currentTarget;
        const selectedIndex = parseInt(selectedBtn.dataset.index);
        const question = this.filteredQuestions[this.currentQuestionIndex];
        const correctIndex = question.correctAnswer;

        this.answered = true;

        // Disable all buttons
        const optionButtons = document.querySelectorAll('.option-btn');
        optionButtons.forEach(btn => {
            btn.classList.add('disabled');
            btn.disabled = true;
        });

        // Check answer
        if (selectedIndex === correctIndex) {
            // Correct answer
            selectedBtn.classList.add('correct');
            this.feedback.textContent = '✅ Doğru! Tebrikler!';
            this.feedback.classList.add('show', 'correct');
            this.score++;
        } else {
            // Incorrect answer
            selectedBtn.classList.add('incorrect');
            optionButtons[correctIndex].classList.add('correct');
            this.feedback.textContent = '❌ Yanlış! Doğru cevap: ' + String.fromCharCode(65 + correctIndex);
            this.feedback.classList.add('show', 'incorrect');
        }

        // Enable next button
        this.nextBtn.disabled = false;

        // Update score display
        this.updateProgress();
    }

    nextQuestion() {
        this.currentQuestionIndex++;
        this.loadQuestion();
    }

    updateProgress() {
        const totalQuestions = this.filteredQuestions.length;
        const currentQuestion = Math.min(this.currentQuestionIndex + 1, totalQuestions);

        // Update question number
        this.questionNumber.textContent = `Soru ${currentQuestion} / ${totalQuestions}`;

        // Update score
        this.scoreDisplay.textContent = `Skor: ${this.score}/${this.currentQuestionIndex + (this.answered ? 1 : 0)}`;

        // Update progress bar
        const progress = (this.currentQuestionIndex / totalQuestions) * 100;
        this.progressFill.style.width = progress + '%';
    }

    showResults() {
        // Hide quiz container
        this.quizContainer.classList.add('hidden');

        // Show results container
        this.resultsContainer.classList.remove('hidden');

        // Calculate percentage
        const totalQuestions = this.filteredQuestions.length;
        const percentage = Math.round((this.score / totalQuestions) * 100);

        // Update results
        document.getElementById('scorePercentage').textContent = percentage + '%';
        document.getElementById('finalScore').textContent = this.score;
        document.getElementById('totalQuestions').textContent = totalQuestions;

        // Set message based on performance
        const messageEl = document.getElementById('resultsMessage');
        if (percentage >= 90) {
            messageEl.textContent = '🌟 Mükemmel! Harika bir performans gösterdiniz!';
        } else if (percentage >= 70) {
            messageEl.textContent = '👏 Çok iyi! Güçlü bir bilgi birikiminiz var!';
        } else if (percentage >= 50) {
            messageEl.textContent = '👍 İyi! Biraz daha çalışma ile daha da iyileştirebilirsiniz!';
        } else {
            messageEl.textContent = '💪 Konu üzerinde daha fazla çalışmanız faydalı olacaktır!';
        }
    }

    restartQuiz() {
        // Reset state
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.answered = false;
        this.selectedCategory = 'all';
        this.categorySelect.value = 'all';
        this.filteredQuestions = [...this.allQuestions];

        // Hide results, show quiz
        this.resultsContainer.classList.add('hidden');
        this.quizContainer.classList.remove('hidden');

        // Load first question
        this.loadQuestion();
    }
}

// Initialize quiz when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const quiz = new QuizApp();
});
