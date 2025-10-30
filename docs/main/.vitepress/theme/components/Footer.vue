<script setup lang="ts">
import NavLink from "./navigation/NavLink.vue";
</script>

<template>
    <footer class="footer">
        <ul>
            <li>
                <NavLink link="https://www.8crafter.com">8crafter.com</NavLink>
            </li>
            <li>
                <NavLink link="/discord">Discord</NavLink>
            </li>
            <li>
                <NavLink link="https://github.com/8Crafter-Studios/8Crafter-Wiki"
                    >GitHub Repository</NavLink
                >
            </li>
        </ul>
    </footer>
</template>

<style lang="scss">
.footer {
    background-color: var(--light-bg-color);
    // border-top: 1px solid #ff00ff;
    text-align: center;
    font-size: 1rem;
    padding: 1em;
    margin-top: auto;

    ul {
        list-style: none;
    }

    @media not (max-width: 900px) {
        ul {
            display: flex;
            justify-content: center;
        }

        li:not(:first-child) {
            padding-left: 0.3rem;
        }

        li:not(:first-child)::before {
            content: "|";
            margin-right: 0.3rem;
        }
    }
}
</style>
