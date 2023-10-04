import React, { useEffect, useState } from "react";
import { View, Text, RefreshControl, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Item from './Item';
import GlobalStyles from "../../GlobalStyles";
import Api from '../../api/Api';


const Listing = ({ navigation, postData, loaded, errLoad, totalPage }) => {
    const [page, setPage] = useState(1);

    const selectPage = (page_no) => {
        if (
            page_no >= 1 &&
            page_no <= Math.ceil(postData.length / 6) &&
            page_no !== page
        ) {
            setPage(page_no)
        }
    }

    return (
        <View style={styles.container}>
            {
                errLoad ?
                    <Text style={[GlobalStyles.boldText, { marginTop: 80 }]}>Error in Loading Data</Text> : null
            }
            {loaded ?
                <>
                    <View style={[styles.tiles]}>
                        {
                            postData && postData.slice(page * 6 - 6, page * 6).map((item) => (
                                <Item key={item.id}
                                    title={item.title}
                                    body={item.body}
                                    item={item}
                                    navigation={navigation}
                                />
                            ))
                        }
                    </View>

                    {
                        postData && postData.length > 0 ?
                            <View style={[styles.pagination]}>
                                {page !== 1 ?
                                    <TouchableOpacity
                                        style={[styles.pageNumber]}
                                        onPress={() => { selectPage(page - 1) }}
                                    >
                                        <Ionicons name="caret-back-outline"></Ionicons>
                                    </TouchableOpacity> :
                                    null
                                }
                                {
                                    totalPage > 5 ?
                                        <>
                                            <TouchableOpacity
                                                style={[
                                                    styles.pageNumber,
                                                    page === totalPage - 4 ? { backgroundColor: "#4169E1" } : null,
                                                    page >= totalPage - 4 ? null : { backgroundColor: "#4169E1" }
                                                ]}
                                                onPress={() => { selectPage(page >= totalPage - 4 ? totalPage - 4 : page) }}
                                            >
                                                <Text style={[
                                                    GlobalStyles.boldText,
                                                    page === totalPage - 4 ? { color: "#fff" } : null,
                                                    page >= totalPage - 4 ? null : { color: "#fff" }
                                                ]}
                                                >
                                                    {page >= totalPage - 4 ? totalPage - 4 : page}
                                                </Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity
                                                style={[
                                                    styles.pageNumber,
                                                    page === totalPage - 3 ? { backgroundColor: "#4169E1" } : null
                                                ]}
                                                onPress={() => { selectPage(page >= totalPage - 4 ? totalPage - 3 : page + 1) }}
                                            >
                                                <Text style={[
                                                    GlobalStyles.boldText,
                                                    page === totalPage - 3 ? { color: "#fff" } : null
                                                ]}
                                                >
                                                    {page >= totalPage - 4 ? totalPage - 3 : page + 1}
                                                </Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity
                                                style={[
                                                    styles.pageNumber,
                                                    page === totalPage - 2 ? { backgroundColor: "#4169E1" } : null
                                                ]}
                                                onPress={() => { selectPage(page >= totalPage - 4 ? totalPage - 2 : page + 2) }}
                                            >
                                                <Text style={[
                                                    GlobalStyles.boldText,
                                                    page === totalPage - 2 ? { color: "#fff" } : null
                                                ]}
                                                >
                                                    {page >= totalPage - 4 ? totalPage - 2 : page + 2}
                                                </Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity
                                                style={[
                                                    styles.pageNumber,
                                                    page === totalPage - 1 ? { backgroundColor: "#4169E1" } : null
                                                ]}
                                                onPress={() => { selectPage(page >= totalPage - 4 ? totalPage - 1 : page + 3) }}
                                            >
                                                <Text style={[
                                                    GlobalStyles.boldText,
                                                    page === totalPage - 1 ? { color: "#fff" } : null
                                                ]}
                                                >
                                                    {page >= totalPage - 4 ? totalPage - 1 : page + 3}
                                                </Text>
                                            </TouchableOpacity>

                                            {
                                                page >= totalPage - 4 ?
                                                    null : <Text style={[GlobalStyles.boldText, { letterSpacing: 5, }]}>...</Text>
                                            }

                                            <TouchableOpacity
                                                style={[
                                                    styles.pageNumber,
                                                    page === totalPage ? { backgroundColor: "#4169E1" } : null
                                                ]}
                                                onPress={() => { selectPage(totalPage) }}
                                            >
                                                <Text style={[
                                                    GlobalStyles.boldText,
                                                    page === totalPage ? { color: "#fff" } : null
                                                ]}
                                                >
                                                    {totalPage}
                                                </Text>
                                            </TouchableOpacity>
                                        </>
                                        :

                                        [...Array(Math.ceil(postData.length / 6))].map((_, index) => (
                                            <TouchableOpacity
                                                style={[styles.pageNumber, page === index + 1 ? { backgroundColor: "#4169E1" } : null]}
                                                key={index}
                                                onPress={() => { selectPage(index + 1) }}
                                            >
                                                <Text style={[GlobalStyles.boldText, page === index + 1 ? { color: "#fff" } : null]}>{index + 1}</Text>
                                            </TouchableOpacity>
                                        ))
                                }
                                {page === totalPage ? null :
                                    <TouchableOpacity
                                        style={[styles.pageNumber]}
                                        onPress={() => { selectPage(page + 1) }}
                                    >
                                        <Ionicons name="caret-forward-outline"></Ionicons>
                                    </TouchableOpacity>
                                }
                            </View> : null
                    }
                </>
                :
                <Text style={[GlobalStyles.boldText, { marginTop: 80 }]}>Loading...</Text>
            }
        </View>
    )

}

export default Listing;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
    },
    tiles: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingVertical: 10,
        marginTop: 10,
        marginBottom: 25,
        justifyContent: 'center',
    },
    pagination: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
    },
    pageNumber: {
        backgroundColor: 'red',
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginHorizontal: 5,
        borderRadius: 3,
        elevation: 2,
    }
})