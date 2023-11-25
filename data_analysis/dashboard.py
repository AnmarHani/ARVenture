import streamlit as st
import pandas as pd
import mysql.connector
from PIL import Image
import matplotlib.pyplot as plt

st.markdown('<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet">', unsafe_allow_html=True)


def authenticate(username, password):
    return username == "ZiyadAdmin" and password == "adminAnmar"


@st.cache(allow_output_mutation=True)
def fetch_data_mysql(query):
    conn = mysql.connector.connect(
        host='localhost',
        database='arventure',
        user='root',
        password='2459'
    )
    df = pd.read_sql(query, conn)
    conn.close()
    return df


def plot_bar_chart(df, title, x_label, y_label):
    plt.figure(figsize=(10, 6))  
    plt.bar(df[x_label], df[y_label])
    plt.title(title)
    plt.xlabel(x_label)
    plt.ylabel(y_label)
    plt.xticks(rotation=45)
    st.pyplot(plt)


def plot_pie_chart(df, title):
    plt.figure(figsize=(8, 8))
    explode = [0.1 for _ in range(len(df))]
    plt.pie(df['count'], labels=df['game_name'], autopct='%1.1f%%', explode=explode)
    plt.title(title)
    plt.legend(title='Game Name')
    st.pyplot(plt)

def login_ui():
    username = st.text_input("Username")
    password = st.text_input("Password", type="password")
    login_button = st.button("Login")
    return username, password, login_button


def main():
    st.markdown('<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet">', unsafe_allow_html=True)

    if "logged_in" not in st.session_state or not st.session_state.logged_in:
        username, password, login_button = login_ui()

        if login_button:
            if authenticate(username, password):
                st.session_state.logged_in = True
            else:
                st.warning("Incorrect username or password")
                return  


    if "logged_in" in st.session_state and st.session_state.logged_in:
        logo_path = "C:/Users/dayiz/OneDrive/سطح المكتب/ARVenture-main/Logo.png"

        try:
            logo_image = Image.open(logo_path)
            st.image(logo_image, width=200)
        except Exception as e:
            st.error(f"Error loading the logo: {e}")

        st.sidebar.title('Navigation')
        sections = ['Top Dislikes and Likes', 'Games by Country', 'Average', 'Database']  
        section = st.sidebar.radio('Go to', sections)

        if section == 'Top Dislikes and Likes':
            st.header('Top Dislikes and Likes')
            selection = st.radio('Select Type', ('Top Likes', 'Top Dislikes'))

            if selection == 'Top Likes':
                st.subheader('Top 5 Game Tools Based on Likes')
                query = "SELECT * FROM favourite_game_tools ORDER BY likes DESC LIMIT 5"
                df = fetch_data_mysql(query)
                plot_bar_chart(df, 'Top 5 Game Tools Based on Likes', 'tool_name', 'likes')

            elif selection == 'Top Dislikes':
                st.subheader('Worst 5 Game Tools Based on Dislikes')
                query = "SELECT * FROM favourite_game_tools ORDER BY dislikes DESC LIMIT 5"
                df = fetch_data_mysql(query)
                plot_bar_chart(df, 'Worst 5 Game Tools Based on Dislikes', 'tool_name', 'dislikes')

        elif section == 'Games by Country':
            st.header('Games Added by Users from Different Countries')
            countries = ['United Kingdom', 'United States', 'Saudi Arabia']  
            country = st.sidebar.selectbox('Select a country', countries)
            query = f"SELECT * FROM favourite_game_tools WHERE user_id IN (SELECT id FROM users WHERE country = '{country}')"
            df = fetch_data_mysql(query)
            df = df.groupby('game_name').size().reset_index(name='count')
            plot_pie_chart(df, f'Games Added by Users from {country}')

        elif section == 'Average':
            st.header('Average Ratings for Game Tools')
            avg_options = ['Average Dislikes', 'Average Likes']
            avg_choice = st.selectbox('Select Average Type', avg_options)

            num_of_tools = st.slider('Select Number of Tools to Analyze', min_value=5, max_value=50, value=10)

            if avg_choice == 'Average Dislikes':
                st.subheader('Average Dislikes for Game Tools')
                query = f"SELECT * FROM favourite_game_tools ORDER BY dislikes DESC LIMIT {num_of_tools}"
                favourite_game_tools_df = fetch_data_mysql(query)
                average_dislikes = favourite_game_tools_df.groupby('tool_name')['dislikes'].mean()
                plot_bar_chart(average_dislikes.reset_index(), 'Average Dislikes for Game Tools', 'tool_name', 'dislikes')

            elif avg_choice == 'Average Likes':
                st.subheader('Average Likes for Game Tools')
                query = f"SELECT * FROM favourite_game_tools ORDER BY likes DESC LIMIT {num_of_tools}"
                favourite_game_tools_df = fetch_data_mysql(query)
                average_likes = favourite_game_tools_df.groupby('tool_name')['likes'].mean()
                plot_bar_chart(average_likes.reset_index(), 'Average Likes for Game Tools', 'tool_name', 'likes')

        elif section == 'Database':
            st.header('Database Information')
           
            st.subheader('List of Tables')
            query_tables = "SHOW TABLES"
            tables_df = fetch_data_mysql(query_tables)

            st.dataframe(tables_df)

            for table in tables_df.iloc[:, 0]:
                st.subheader(f'Data in Table: {table}')
                query_data = f"SELECT * FROM {table}"  
                data_df = fetch_data_mysql(query_data)
                st.dataframe(data_df)


if __name__ == "__main__":
    main()
